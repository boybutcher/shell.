export const submitMedia = (mediaData) => {
  return {
    type: 'SUBMIT_MEDIA',
    mediaData: mediaData,
  }
}