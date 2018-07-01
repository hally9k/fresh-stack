import { catchError } from 'rxjs/operators'

// Wraps the given epic so that it asynchronously throws the error and restarts.
export const wrapEpic = (epic) => (...args) =>
    // $FlowTODO Object.values returns mixed type => https://github.com/facebook/flow/issues/2221
    epic(...args).pipe(
        catchError((error, source) => {
            setTimeout(() => {
                throw error
            }, 0)

            return source
        })
    )
