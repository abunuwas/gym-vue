import localforage from 'localforage'

const SET_NAMESPACE = 'SET-'

export const fetchSets = () => {
  return localforage.startsWith(SET_NAMESPACE).then((res) => {
    return res
  })
}

export const saveSet = (set) => {
  return localforage.setItem(
    SET_NAMESPACE + set.id,
    set
  ).then((value) => {
    return value
  }).catch((err) => {
    console.log(
      'oops! The set was too far gone! ' + err
    )
  })
}

export const removeSet = (set) => {
  return localforage.removeItem(
    SET_NAMESPACE + set.id
  ).then(() => {
    return true
  }).catch((err) => {
    console.log(err)
    return false
  })
}
