const config = {
  settings: {
    title: "Finhex Status",
    url: "https://status.finhex.xyz",
    logo: "logo-192x192.png",
    daysInHistogram: 90,
    collectResponseTimes: true,
    allmonitorsOperational: "All Systems Operational",
    notAllmonitorsOperational: "Not All Systems Operational",
    monitorLabelOperational: "Operational",
    monitorLabelNotOperational: "Not Operational",
    monitorLabelNoData: "No data",
    dayInHistogramNoData: "No data",
    dayInHistogramOperational: "All good",
    dayInHistogramNotOperational: " incident(s)"
  },
  monitors: [
    {
      id: "finhex",
      name: "finhex.xyz",
      description: "Jellyfin",
      url: "https://finhex.xyz/",
      method: "GET",
      expectStatus: 200,
      followRedirect: false,
      linkable: true
    }
  ]
}

export default config
