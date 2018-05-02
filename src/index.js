const noop = () => {}

export default function empty(start, sink) {
  if (start !== 0) return
  sink(0, noop)
  sink(2)
}
