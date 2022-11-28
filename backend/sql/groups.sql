SELECT
  nodes.id as id,	
  groups.id as groups_id,
  groups.caption as group_caption, 
  nodes.caption as node_caption, 
--   nodes.status as node_status, 
--   nodes.interface as node_interface, 
--   nodes.admin as node_admin,
  interfaces.caption as interface_caption,
--   interfaces.status as interface_status,
  applications.caption as application_caption,
  users.firstname,
  users.lastname,
  users.email,
  node_statuses.Id as node_status_id,
  node_statuses.color as node_status_color,
  node_statuses.description as node_status_description,
  interface_statuses.color as interface_status_color,
  interface_statuses.description as interface_status_description
FROM groups 
inner join groups_nodes on groups.id = groups_nodes.group_id
left join nodes on groups_nodes.node_id = nodes.id
left join interfaces on nodes.interface = interfaces.id
inner join nodes_applications on nodes.id = nodes_applications.node_id
left join applications on nodes_applications.application_id = applications.id
left join users on nodes.admin = users.id
left join statuses as node_statuses on nodes.status = node_statuses.Id
left join statuses as interface_statuses on interfaces.status = interface_statuses.Id
