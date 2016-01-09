function calculator(distance, busDrive, busWalk)  {
  const walkTime = (distance / walk) * 60
  const busTime = (busDrive / bus + busWalk / walk) * 60

  if (walkTime < 10) return 'Walk'
  if (walkTime > 120) return 'Bus'
  if (busTime < walkTime) return 'Bus'
  return 'Walk'
}
