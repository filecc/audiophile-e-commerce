function sortByProperty(arr, property) {
  return arr.sort((a, b) => b[property] - a[property]);
}

function createUrl(slug) {
    
  let category;
  if (slug.includes('headphones'))
  {
    category = "headphones";
  }
  else if (slug.includes('earphones')){
    category = "earphones";
  }
  else
  {
    category = "speakers";
  }
  
  return '/'+category+'/'+slug
}

export { sortByProperty, createUrl };
