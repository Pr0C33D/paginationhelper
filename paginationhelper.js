// https://www.codewars.com/kata/515bb423de843ea99400000a


function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  
  PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
  }

  PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
      return -1;
    }
    
    return this.itemsPerPage - Math.ceil((((pageIndex + 1)*this.itemsPerPage)%this.itemCount())%this.itemsPerPage);
  }

  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (itemIndex > this.itemCount() - 1 || itemIndex < 0) {
      return -1;
    }
    
    return Math.ceil((itemIndex + 1)/this.itemsPerPage) - 1;
  }