var assert = require('assert');
describe('Amazon search', function() {
    it('Search book on Amazon', function () {
        browser.url('https://www.amazon.com');

        var searchInputField = $('#twotabsearchtextbox');
        var searchButton = $('input.nav-input');
        var searchedBook = $('#result_1 > div > div > div > div.a-fixed-left-grid-col.a-col-right > div.a-row.a-spacing-small > div:nth-child(1) > a > h2');
        var bookPrice = $('#result_1 > div > div > div > div.a-fixed-left-grid-col.a-col-right > div:nth-child(2) > div.a-column.a-span7 > div:nth-child(2) > a > span.a-color-base.sx-zero-spacing > span');

        searchInputField.set('Spider-Man: Coloring Book for Kids');
        browser.click(searchButton);

        browser.waitForVisible(searchedBook);

        var actualBook = searchedBook.get();
        var actualPrice = bookPrice.get();
        var expectedBook = ('Spider-Man: Coloring Book for Kids');
        var expectedPrice = ('5.99');

        assert.equal(actualBook, expectedBook);
        assert.equal(actualPrice, expectedPrice);
    });
});

