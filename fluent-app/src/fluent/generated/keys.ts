import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '9fc2d0990c1f4eb78eeb6ca79bcf939e'
                    }
                    jev_decision_check_action: {
                        table: 'sys_hub_action_type_definition'
                        id: 'e67c6ea48b4246ed80f0e277507321d5'
                        deleted: true
                    }
                    jev_decision_check_script_step: {
                        table: 'sys_hub_step_instance'
                        id: 'e412b7247e3e4ccd9d7062c622069f8b'
                        deleted: true
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '64432e5b07704c528aa65dd86ba315bb'
                    }
                }
                composite: [
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: '032d1b3f3b93c7108263d1a693e45a69'
                        key: {
                            resource_mapping: 'b62d1b3f3b93c7108263d1a693e45a60'
                            resource_attribute_name: 'b6f296a1a3d20210883c25d1d71e6170'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: '032d1b3f3b93c7108263d1a693e45a6d'
                        key: {
                            resource_mapping: 'b62d1b3f3b93c7108263d1a693e45a60'
                            resource_attribute_name: '74a9ca6c7f4f02100a03b6257d866522'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: '032d1b3f3b93c7108263d1a693e45a71'
                        key: {
                            resource_mapping: 'b62d1b3f3b93c7108263d1a693e45a60'
                            resource_attribute_name: '7d61dfba7f82d21071cab6257d86653e'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '0445761e1f8e4bdca10700d139a3be55'
                        deleted: true
                        key: {
                            model: 'e67c6ea48b4246ed80f0e277507321d5'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_gen_ai_feature_mapping'
                        id: '152d973f3b93c7108263d1a693e45a00'
                        key: {
                            feature_name: 'Jev Decision Check'
                            document: 'c92d573f3b93c7108263d1a693e45ac2'
                        }
                    },
                    {
                        table: 'sys_gen_ai_strategy_mapping'
                        id: '152d973f3b93c7108263d1a693e45a06'
                        key: {
                            strategy: 'CAPABILITY_EXECUTION'
                            feature: '152d973f3b93c7108263d1a693e45a00'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '1806cd6a7bd24bdea488cdf9d2acbcbf'
                        deleted: true
                        key: {
                            model: 'e412b7247e3e4ccd9d7062c622069f8b'
                            element: 'rawResponse'
                        }
                    },
                    {
                        table: 'sys_one_extend_capability_definition'
                        id: '192d973f3b93c7108263d1a693e45a31'
                        key: {
                            capability: 'c92d573f3b93c7108263d1a693e45ac2'
                            api: 'af9702d0c3110210b0939bc8a840dd2c'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '224155a03d66423aaee65838e7a44e64'
                        deleted: true
                        key: {
                            document_key: 'e412b7247e3e4ccd9d7062c622069f8b'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '2b2c6e3b3b9787108263d1a693e45a63'
                        key: {
                            name: 'x_snc_jev.admin'
                        }
                    },
                    {
                        table: 'sys_agent_access_role_configuration'
                        id: '3357c4043ba34b10cedd7ea693e45a68'
                        key: {
                            agent: '885c377b3bd7c7108263d1a693e45a79'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '37154ec1f3ac4f08aa8cf7e06190bd0a'
                        deleted: true
                        key: {
                            model: 'e67c6ea48b4246ed80f0e277507321d5'
                            element: 'probability'
                        }
                    },
                    {
                        table: 'sys_agent_access_role_mapping'
                        id: '3757c4043ba34b10cedd7ea693e45a95'
                        key: {
                            agent_access_config: '3357c4043ba34b10cedd7ea693e45a68'
                            role: {
                                id: '2831a114c611228501d4ea6c309d626d'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_mapping'
                        id: '392dd73f3b93c7108263d1a693e45a14'
                        key: {
                            parent_capability: 'c92d573f3b93c7108263d1a693e45ac2'
                            resource_capability: 'c92d573f3b93c7108263d1a693e45ac2'
                        }
                    },
                    {
                        table: 'sys_agent_access_role_mapping'
                        id: '3e2dd73f3b93c7108263d1a693e45afb'
                        key: {
                            agent_access_config: '722dd73f3b93c7108263d1a693e45a39'
                            role: {
                                id: '2831a114c611228501d4ea6c309d626d'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: '42fdbbf33b1bc7108263d1a693e45a68'
                        key: {
                            agent: '885c377b3bd7c7108263d1a693e45a79'
                            tool: '3b8c4f4fc3e022100e94313a05013167'
                            name: 'AICT Knowledge Graph Lookup'
                        }
                    },
                    {
                        table: 'sn_aia_version'
                        id: '478cffff3bd7c7108263d1a693e45a85'
                        deleted: true
                        key: {
                            target_id: '885c377b3bd7c7108263d1a693e45a79'
                            version_name: 'Version 1'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '483d6962d4784b9fbabf3b5a7b1c3961'
                        deleted: true
                        key: {
                            model: 'e412b7247e3e4ccd9d7062c622069f8b'
                            element: 'probability'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '49209ac1fc6d4c92a68383e772044c24'
                        deleted: true
                        key: {
                            id: 'e67c6ea48b4246ed80f0e277507321d5'
                            table: 'var__m_sys_hub_action_output_e67c6ea48b4246ed80f0e277507321d5'
                            field: 'answer'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '4cabefdd877f45b9a1aa5b6f0245ee25'
                        deleted: true
                        key: {
                            model: 'e67c6ea48b4246ed80f0e277507321d5'
                            element: 'instructions'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: '4eedf3f33b1bc7108263d1a693e45a3d'
                        key: {
                            agent: '885c377b3bd7c7108263d1a693e45a79'
                            tool: 'accd33b33b1bc7108263d1a693e45aad'
                            name: 'Jev Decision Check Skill'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '5359eba25fa440d4b412e8cc63ee6ef4'
                        deleted: true
                        key: {
                            model: 'e412b7247e3e4ccd9d7062c622069f8b'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '6459fc51d1e84d4e9cc0d0eaa32b56a1'
                        deleted: true
                        key: {
                            model: 'e67c6ea48b4246ed80f0e277507321d5'
                            element: 'answer'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '663a5c6dae784954be0203143b975897'
                        deleted: true
                        key: {
                            document_key: 'e412b7247e3e4ccd9d7062c622069f8b'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_agent_access_role_configuration'
                        id: '722dd73f3b93c7108263d1a693e45a39'
                        key: {
                            agent: 'e12d973f3b93c7108263d1a693e45a76'
                        }
                    },
                    {
                        table: 'sys_gen_ai_skill'
                        id: '73534c443b634b10cedd7ea693e45a0c'
                        key: {
                            skill_document: '075348443b634b10cedd7ea693e45a02'
                            skill_table: 'sn_aia_skill_metadata'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_mapping'
                        id: '762d1b3f3b93c7108263d1a693e45a2f'
                        key: {
                            parent_capability: 'c92d573f3b93c7108263d1a693e45ac2'
                            resource_capability: 'a28f0e067f0202105bc49fbefc8665ec'
                            resource_name: 'Correctness Metric'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '77385b1526b94d80a6d95495e71a735a'
                        deleted: true
                        key: {
                            id: 'e412b7247e3e4ccd9d7062c622069f8b'
                            table: 'var__m_sys_hub_step_ext_input_e412b7247e3e4ccd9d7062c622069f8b'
                            field: 'state'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_mapping'
                        id: '7a2dd73f3b93c7108263d1a693e45add'
                        key: {
                            parent_capability: 'c92d573f3b93c7108263d1a693e45ac2'
                            resource_capability: 'f5fa89d57f14121071cab6257d8665a6'
                            resource_name: 'Correctness Metric with Golden Response'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: '7a2dd73f3b93c7108263d1a693e45ae8'
                        key: {
                            resource_mapping: '7a2dd73f3b93c7108263d1a693e45add'
                            resource_attribute_name: 'e19b01d97f14121071cab6257d86659e'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: '7a2dd73f3b93c7108263d1a693e45aec'
                        key: {
                            resource_mapping: '7a2dd73f3b93c7108263d1a693e45add'
                            resource_attribute_name: '0dfb85d97f14121071cab6257d8665de'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: '7a2dd73f3b93c7108263d1a693e45af0'
                        key: {
                            resource_mapping: '7a2dd73f3b93c7108263d1a693e45add'
                            resource_attribute_name: '2d7b81d97f14121071cab6257d86654c'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: '7a2dd73f3b93c7108263d1a693e45af4'
                        key: {
                            resource_mapping: '7a2dd73f3b93c7108263d1a693e45add'
                            resource_attribute_name: 'b4f0d77a7f82d21071cab6257d8665f8'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: '7e2d1b3f3b93c7108263d1a693e45a33'
                        key: {
                            resource_mapping: '762d1b3f3b93c7108263d1a693e45a2f'
                            resource_attribute_name: '290196427f0202105bc49fbefc866554'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '84a1acddc2ce48acb247767561cfe9db'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_action_output_e67c6ea48b4246ed80f0e277507321d5'
                            element: 'probability'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_agent_access_role_mapping'
                        id: '8c18cc843ba34b10cedd7ea693e45aea'
                        key: {
                            agent_access_config: '3357c4043ba34b10cedd7ea693e45a68'
                            role: {
                                id: '46d56494ff0103106486ffffffffff16'
                                key: {
                                    name: 'sn_naa.web_agent_runtime'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: '8f2d1b3f3b93c7108263d1a693e45a64'
                        key: {
                            resource_mapping: 'b62d1b3f3b93c7108263d1a693e45a60'
                            resource_attribute_name: 'a4e296a1a3d20210883c25d1d71e616b'
                        }
                    },
                    {
                        table: 'sys_generative_ai_prompt_config'
                        id: '952d973f3b93c7108263d1a693e45a4d'
                        key: {
                            ai_config: '992d973f3b93c7108263d1a693e45a48'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '976e76967a6d444f8537ca3f474ce4c3'
                        deleted: true
                        key: {
                            id: 'e412b7247e3e4ccd9d7062c622069f8b'
                            table: 'var__m_sys_hub_step_ext_input_e412b7247e3e4ccd9d7062c622069f8b'
                            field: 'instructions'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c32310efe3e4680b849aa1acfed9436'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_action_output_e67c6ea48b4246ed80f0e277507321d5'
                            element: 'answer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e4f98aebf4247f68a7cb43a4a04bcbd'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_action_output_e67c6ea48b4246ed80f0e277507321d5'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '9f49317b4e7e420e95a8baffb4628ddb'
                        deleted: true
                        key: {
                            model: 'e412b7247e3e4ccd9d7062c622069f8b'
                            element: 'instructions'
                        }
                    },
                    {
                        table: 'sn_nowassist_skill_config_status'
                        id: 'a12d973f3b93c7108263d1a693e45a7a'
                        key: {
                            skill_config: 'e12d973f3b93c7108263d1a693e45a76'
                        }
                    },
                    {
                        table: 'sys_one_extend_capability_definition'
                        id: 'a36d593d9c8f4944a7db59c7b72dc050'
                        key: {
                            capability: '575598370ee54f93803670fd5f490703'
                            api: '77582e8bea3847b38cf6c565a76b0e8e'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a546e7e2dabf4095b4770a2c37620a17'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_action_input_e67c6ea48b4246ed80f0e277507321d5'
                            element: 'instructions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'a72c6e3b3b9787108263d1a693e45a8a'
                        key: {
                            name: 'x_snc_jev.user'
                        }
                    },
                    {
                        table: 'sn_aia_tool'
                        id: 'accd33b33b1bc7108263d1a693e45aad'
                        key: {
                            name: 'Jev Decision Check Skill'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b3d719a8c7cf46b180a22e69b21a36b0'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_action_input_e67c6ea48b4246ed80f0e277507321d5'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: 'b62d1b3f3b93c7108263d1a693e45a48'
                        key: {
                            resource_mapping: '762d1b3f3b93c7108263d1a693e45a2f'
                            resource_attribute_name: '9e4762677f3602100a03b6257d8665cc'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: 'b62d1b3f3b93c7108263d1a693e45a4c'
                        key: {
                            resource_mapping: '762d1b3f3b93c7108263d1a693e45a2f'
                            resource_attribute_name: '667113fa7f82d21071cab6257d8665d7'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_mapping'
                        id: 'b62d1b3f3b93c7108263d1a693e45a60'
                        key: {
                            parent_capability: 'c92d573f3b93c7108263d1a693e45ac2'
                            resource_capability: '63015aeda3920210883c25d1d71e6124'
                            resource_name: 'Faithfulness Metric'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ba084c843ba34b10cedd7ea693e45ace'
                        key: {
                            sys_security_acl: '135704043ba34b10cedd7ea693e45a78'
                            sys_user_role: {
                                id: '7fcaa702933002009c8579b4f47ffbde'
                                key: {
                                    name: 'snc_internal'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'bba4679ddc634564953ddeec8d052c7d'
                        deleted: true
                        key: {
                            model: 'e412b7247e3e4ccd9d7062c622069f8b'
                            element: 'answer'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'bccbd34a51064cfcb8e6b2e5ca6ae108'
                        deleted: true
                        key: {
                            id: 'e67c6ea48b4246ed80f0e277507321d5'
                            table: 'var__m_sys_hub_action_output_e67c6ea48b4246ed80f0e277507321d5'
                            field: 'rawResponse'
                        }
                    },
                    {
                        table: 'sn_aia_agent_config'
                        id: 'd38cffff3bd7c7108263d1a693e45ab1'
                        key: {
                            agent: '885c377b3bd7c7108263d1a693e45a79'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd3b66b6eac994d93a41b25d5fd386f5f'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_action_output_e67c6ea48b4246ed80f0e277507321d5'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_one_extend_definition_config'
                        id: 'dd2d973f3b93c7108263d1a693e45a35'
                        key: {
                            definition: '192d973f3b93c7108263d1a693e45a31'
                            capability: 'c92d573f3b93c7108263d1a693e45ac2'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'dd388a2630904979b114aa005ce72b41'
                        deleted: true
                        key: {
                            model: 'e67c6ea48b4246ed80f0e277507321d5'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_generative_ai_prompt_config'
                        id: 'dd3b3e773b1f87108263d1a693e45ae4'
                        key: {
                            ai_config: '953bb2b33b1f87108263d1a693e45a5f'
                        }
                    },
                    {
                        table: 'sn_nowassist_skill_config'
                        id: 'e12d973f3b93c7108263d1a693e45a76'
                        key: {
                            skill_id: 'c92d573f3b93c7108263d1a693e45ac2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'e382ccf74df34a52925aa90471f0ade5'
                        deleted: true
                        key: {
                            id: 'e67c6ea48b4246ed80f0e277507321d5'
                            table: 'var__m_sys_hub_action_output_e67c6ea48b4246ed80f0e277507321d5'
                            field: 'probability'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'e4ef677771254ab7968553e05e0b6bd9'
                        deleted: true
                        key: {
                            model: 'e67c6ea48b4246ed80f0e277507321d5'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eb5784043ba34b10cedd7ea693e45a9d'
                        key: {
                            sys_security_acl: '135704043ba34b10cedd7ea693e45a78'
                            sys_user_role: {
                                id: '2831a114c611228501d4ea6c309d626d'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: 'ee0c98803be74b10cedd7ea693e45afe'
                        key: {
                            agent: 'e80b908c3ba74b10cedd7ea693e45a1a'
                            tool: 'e20c98803be74b10cedd7ea693e45a48'
                            name: 'Jev Decision Check Skill'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: 'f62dd73f3b93c7108263d1a693e45ae2'
                        key: {
                            resource_mapping: '7a2dd73f3b93c7108263d1a693e45add'
                            resource_attribute_name: 'e0db01d97f14121071cab6257d8665a4'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f63d9f3f3b93c7108263d1a693e45a39'
                        deleted: false
                        key: {
                            sys_security_acl: '2d2d973f3b93c7108263d1a693e45a98'
                            sys_user_role: {
                                id: '7fcaa702933002009c8579b4f47ffbde'
                                key: {
                                    name: 'snc_internal'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f88bd51f367649b193a26710752f0232'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_action_output_e67c6ea48b4246ed80f0e277507321d5'
                            element: 'rawResponse'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: 'fa0cd8803be74b10cedd7ea693e45a06'
                        key: {
                            agent: 'e80b908c3ba74b10cedd7ea693e45a1a'
                            tool: '3b8c4f4fc3e022100e94313a05013167'
                            name: 'AICT Knowledge Graph Lookup'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'fb73508c10b44a948dccae95a8893268'
                        deleted: true
                        key: {
                            model: 'e67c6ea48b4246ed80f0e277507321d5'
                            element: 'rawResponse'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: 'fe2d1b3f3b93c7108263d1a693e45a37'
                        key: {
                            resource_mapping: '762d1b3f3b93c7108263d1a693e45a2f'
                            resource_attribute_name: '2de4d2467f0202105bc49fbefc866578'
                        }
                    },
                ]
            }
        }
    }
}
