import forEach from 'callbag-for-each'
import pipe from 'callbag-pipe'
import subscribe from 'callbag-subscribe'

import empty from '../src'

test('does not emit any values', done => {
  pipe(
    empty,
    forEach(() => {
      done.fail('Should not emit anything.')
    }),
  )

  done()
})

test('completes immediately', done => {
  let completed = false

  const fail = () => {
    done.fail('This should not happen.')
  }

  pipe(
    empty,
    subscribe({
      next: fail,
      error: fail,
      complete: () => {
        completed = true
      },
    }),
  )

  expect(completed).toBe(true)
  done()
})
