// Code your solution in this file!

function logDriverNames(drivers) {
  return drivers.map(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  home = drivers.filter(function(driver){
    return driver.hometown === location
  })
  return home.map(function(obj){
    console.log(obj.name)
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(one, two){
    return one.revenue - two.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function(one, two){
    return one.name.localeCompare(two.name)
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function(total, driver){
    return driver.revenue + total
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
