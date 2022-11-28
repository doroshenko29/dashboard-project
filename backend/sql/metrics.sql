SELECT
  metrics.id, metrics.datetime, metrics.cpu_utilization,
  metrics.memory_utilization, metrics.disk_utilization, 
  nodes.caption, nodes.status, nodes.interface, nodes.admin
FROM metrics INNER JOIN nodes on metrics.node_id=nodes.id 