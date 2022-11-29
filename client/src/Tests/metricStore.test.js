import MetricStore from "../store/MetricStore"
import metrics from './mockData/metrics.json'

jest.mock('../Utils/getFreshMetrics')

describe("metricStore", () => {
  const store = new MetricStore()
  beforeEach(() => {
    store.setMetrics(metrics)
  })
  it("check filling metrics", async () => {
    expect(store.metrics.length).toBe(176)
  })
})