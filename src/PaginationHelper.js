// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
class PaginationHelper {
    constructor(collection, itemsPerPage) {
      this.collection = collection;
      this.itemsPerPage = itemsPerPage; 
    }
  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
  }
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function() {
    let count = 0;
    const itemsPerPage = this.itemsPerPage;
    for (let i = this.itemCount(); i >= 0; ) {
      i -= itemsPerPage;
      count += 1;
    }
    return count;
  }
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    let collection = this.collection.slice(0);
    let count = 0;
    const itemsPerPage = this.itemsPerPage;
    const pageInclude = {}
    for (let i = this.itemCount(); i >= 0; ) {
      i -= itemsPerPage;
      const items = collection.splice(0, this.itemsPerPage)
      pageInclude[count] = items
      count += 1;
    }
    return pageInclude.hasOwnProperty(pageIndex) ? pageInclude[pageIndex].length : -1;
  }
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    let collection = this.collection.slice(0);
    const itemIndexFind = collection[itemIndex];
    let count = 0;
    const itemsPerPage = this.itemsPerPage;
    const pageInclude = {}
    for (let i = this.itemCount(); i >= 0; ) {
      i -= itemsPerPage;
      const items = collection.splice(0, this.itemsPerPage)
      pageInclude[count] = items
      count += 1;
    }
    for(const i in pageInclude) {
      if(pageInclude[i].includes(itemIndexFind)) {
        return +i;
      }
    }
    return -1;
  }