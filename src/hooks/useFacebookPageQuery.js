import { useCallback, useReducer } from "react"
import useFacebookSdk from "./useFacebookSdk"

const FacebookPageActions = {
  PENDING: "fpa-pending",
  SUCCESS: "fpa-success",
  ERROR: "fpa-error",
  RESET: "fpa-reset",
}

const initialState = {
  loading: false,
  success: false,
  error: null,
  data: null,
}

const FacebookPageEventReducer = (state, action) => {
  switch (action.type) {
    case FacebookPageActions.PENDING:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
        data: null,
      }
    case FacebookPageActions.SUCCESS:
      return {
        ...state,
        loading: false,
        succcess: true,
        error: null,
        data: action.payload,
      }
    case FacebookPageActions.ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
        data: null,
      }
    case FacebookPageActions.RESET:
      return initialState
    default:
      return state
  }
}

const useFacebookPageEventQuery = () => {
  const { isFbReady } = useFacebookSdk()
  const [store, dispatch] = useReducer(FacebookPageEventReducer, initialState)

  if (!process.env.FACEBOOK_GRAPH_TOKEN) {
    throw Error("FACEBOOK_GRAPH_TOKEN not exported in the environment!")
  }

  const callApi = useCallback(
    pageId => {
      if (isFbReady) {
        dispatch({
          type: FacebookPageActions.PENDING,
        })
        // eslint-disable-next-line consistent-return
        // eslint-disable-next-line no-undef
        FB.api(
          pageId,
          { fields: "events", access_token: process.env.FACEBOOK_GRAPH_TOKEN },
          res => {
            if (!res || res.error) {
              dispatch({
                type: FacebookPageActions.ERROR,
                payload: res?.error || {
                  message: "Something went wrong. Empty response.",
                },
              })
              return
            }
            dispatch({
              type: FacebookPageActions.SUCCESS,
              payload: res,
            })
          }
        )
      }
    },
    [isFbReady]
  )

  return { ...store, callApi }
}

export default useFacebookPageEventQuery
