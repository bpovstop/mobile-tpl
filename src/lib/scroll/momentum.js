export default function Momentum(
  current,
  start,
  time,
  lowerMargin,
  wrapperSize,
  deceleration
) {
  let distance = current - start,
    speed = Math.abs(distance) / time,
    destination,
    duration;

  deceleration = deceleration === undefined ? 0.005 : deceleration;

  destination =
    current + ((speed * speed) / (2 * deceleration)) * (distance < 0 ? -1 : 1);
  duration = speed / deceleration + 2000;
  if (destination < lowerMargin) {
    // destination = wrapperSize
    //   ? lowerMargin - (wrapperSize / 2.8) * (speed / 16)
    //   : lowerMargin;
    destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
    distance = Math.abs(destination - current);
    duration = distance / speed;
  } else if (destination > 0) {
    // destination = wrapperSize ? (wrapperSize / 2.8) * (speed / 16) : 0;
    destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
    distance = Math.abs(current) + destination;
    duration = distance / speed;
  }

  return {
    destination: Math.round(destination),
    duration
  };
}
