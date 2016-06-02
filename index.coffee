$ ->
  $('ul.tabs').tabs()
  $('.getTxtFile').hover (e) ->
    $.get '/server/file' + $(this).attr('id') + '.txt', (data) ->
      $('#fileContent').text data

  $('.book').click (e) ->
    bookNum = $(this).attr('id')
    $.get '/server/books.xml', (data, status) ->
      $(data).find('book').each ->
        id = $(this).find('id').text()
        if id == bookNum
          title = $(this).find('title').text()
          author = $(this).find('author').text()
          content = $(this).find('description').text()
          pages = $(this).find('pages').text()
          divId = '#book' + id
          $(divId).append '<ul class=\'bookList\'> <li>' + title + '</li> <li>' + author + '</li> </ul>'