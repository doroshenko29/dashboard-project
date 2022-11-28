import {makeAutoObservable} from 'mobx';
import { getFreshMetrics } from '../Utils/getFreshMetrics';

export type metricsType = {
    admin: number,
    caption: string,
    cpu_utilization: number,
    datetime: string,
    disk_utilization: number,
    id: number,
    interface: number,
    memory_utilization: number,
    status: number,
}

export default class MetricStore {
    private _metrics: metricsType[];
    private _freshMetrics: object;
    constructor(){
        this._metrics = []
        this._freshMetrics = {}
        makeAutoObservable(this)
    }

    setMetrics(metrics: metricsType[]) {
        this._metrics = metrics
        this._freshMetrics = getFreshMetrics(metrics)
    }

    get metrics(){
        return this._metrics
    }

    get freshMetrics(){
        return this._freshMetrics
    }
}