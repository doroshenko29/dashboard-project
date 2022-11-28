import { $host } from "."

export const fetchGroups = async () => {
    const {data} = await $host.get('api/groups')
    return data
}

export const fetchMetrics = async () => {
    const {data} = await $host.get('api/metrics')
    return data
}