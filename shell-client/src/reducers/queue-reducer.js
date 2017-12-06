const initialState = {
  mediaData: [],
}

const Queue = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SUBMIT_MEDIA':
      return {
        ...state,
        mediaData: [...state.mediaData, action.mediaData],
      }
    default:
      return state;
  }
}

export default Queue;
