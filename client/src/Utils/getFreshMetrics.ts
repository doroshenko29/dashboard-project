import { metricsType } from "../store/MetricStore"

export function getFreshMetrics(metrics: metricsType[]): object{
    let tempFreshMetrics = {}
    metrics.forEach((el) => {
            if(!tempFreshMetrics.hasOwnProperty(el.caption) 
                || new Date((tempFreshMetrics as any)[el.caption].datetime) < new Date(el.datetime)
            ) {
                (tempFreshMetrics as any)[el.caption] = {...el}
            }
    })
    return tempFreshMetrics
}