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
                        table: 'sys_one_extend_capability_definition'
                        id: '192d973f3b93c7108263d1a693e45a31'
                        key: {
                            capability: 'c92d573f3b93c7108263d1a693e45ac2'
                            api: 'af9702d0c3110210b0939bc8a840dd2c'
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
                        key: {
                            target_id: '885c377b3bd7c7108263d1a693e45a79'
                            version_name: 'Version 1'
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
                        table: 'sn_aia_agent_config'
                        id: 'd38cffff3bd7c7108263d1a693e45ab1'
                        key: {
                            agent: '885c377b3bd7c7108263d1a693e45a79'
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
