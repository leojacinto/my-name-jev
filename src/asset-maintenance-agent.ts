/**
 * AI Asset Maintenance Advisor (Jev) — AI Agent Studio wiring.
 *
 * This mirrors records applied directly via the Table API on mememachine
 * (sn_aia_agent, sn_aia_tool, sn_aia_agent_tool_m2m) in scope x_snc_jev.
 * It documents the config as ServiceNow Fluent Record definitions; it has
 * not been run through `now-sdk build`/`deploy` against this instance.
 *
 * Chain: user asks about maintaining an AI asset (model/prompt/AI system)
 *   -> Knowledge graph tool pulls governance/lifecycle facts (Enterprise
 *      Graph, sys_meta_graph 4df1497e53212210ebb1ddeeff7b1242 — the same
 *      graph AICT's own "AICT KG Data Agent" tag scopes via a filter set
 *      that isn't exposed on this generic AI Agent Studio tool type)
 *   -> Jev Decision Check skill tool turns those facts + the question into
 *      a calibrated decision
 */
import { Record } from '@servicenow/sdk/core';

const JEV_SKILL_CAPABILITY = 'c92d573f3b93c7108263d1a693e45ac2'; // sys_one_extend_capability: Jev Decision Check
const AIA_KNOWLEDGE_GRAPH_TOOL = '3b8c4f4fc3e022100e94313a05013167'; // shared platform tool, type=knowledge_graph
const ENTERPRISE_GRAPH = '4df1497e53212210ebb1ddeeff7b1242'; // sys_meta_graph: global_graph / "Enterprise Graph"

export const assetMaintenanceAgent = Record({
  $id: Now.ID['ai-asset-maintenance-advisor-jev'],
  table: 'sn_aia_agent',
  data: {
    name: 'AI Asset Maintenance Advisor (Jev)',
    description:
      'Answers questions about maintaining an AI asset (model, prompt, or AI system) - e.g. whether it needs recertification, review, or retirement - by pulling governance and lifecycle context from the AICT knowledge graph and getting a calibrated decision from Jev.',
    role:
      "You are an AI governance advisor. When the user asks about maintaining, recertifying, or retiring an AI asset (model, prompt, or AI system), you retrieve relevant lifecycle and compliance context about that asset from the knowledge graph, then call the Jev Decision Check skill to get a calibrated decision, and present Jev's answer to the user along with the supporting context you retrieved.",
    channel: 'nap_and_va',
  },
});

export const jevSkillTool = Record({
  $id: Now.ID['jev-decision-check-skill-tool'],
  table: 'sn_aia_tool',
  data: {
    name: 'Jev Decision Check Skill',
    description:
      'Calls the Jev Decision Check AI Skill Kit skill to get a calibrated, structured decision (typed answer with probability) about an AI asset maintenance question, instead of free-text generation.',
    type: 'capability',
    target_document_table: 'sys_one_extend_capability',
    target_document: JEV_SKILL_CAPABILITY,
    active: 'true',
  },
});

export const jevSkillToolLink = Record({
  $id: Now.ID['ai-asset-maintenance-advisor-jev-skill-tool-link'],
  table: 'sn_aia_agent_tool_m2m',
  data: {
    agent: assetMaintenanceAgent.$id,
    tool: jevSkillTool.$id,
    name: 'Jev Decision Check Skill',
    description: 'Use to get a calibrated decision from Jev once you have the AI asset governance context.',
    execution_mode: 'autopilot',
    display_output: 'true',
    active: 'true',
  },
});

export const knowledgeGraphToolLink = Record({
  $id: Now.ID['ai-asset-maintenance-advisor-kg-tool-link'],
  table: 'sn_aia_agent_tool_m2m',
  data: {
    agent: assetMaintenanceAgent.$id,
    tool: AIA_KNOWLEDGE_GRAPH_TOOL,
    name: 'AICT Knowledge Graph Lookup',
    description:
      'Use to retrieve governance and lifecycle facts about the specific AI asset (model, prompt, or AI system) the user is asking about, before calling Jev.',
    execution_mode: 'autopilot',
    display_output: 'false',
    active: 'true',
    inputs: JSON.stringify([
      {
        name: 'query',
        description:
          'Query to the knowledge graph. Direct translation of the user request, e.g. status and lifecycle facts for the named AI asset.',
      },
      { name: 'knowledge_graph', value: ENTERPRISE_GRAPH, description: 'Knowledge graph source' },
      { name: 'show_column_properties', value: 'true', description: 'Show column properties' },
      { name: 'group_by_table', value: 'true', description: 'Group by table' },
    ]),
  },
});
