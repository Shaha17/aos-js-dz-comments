'use strict';

const rootEl = document.getElementById('root');

const formEl = document.createElement('form');
formEl.dataset.id = 'comment-form';
rootEl.appendChild(formEl);

const commentEl = document.createElement('textarea');
commentEl.dataset.input = 'comment';
formEl.appendChild(commentEl);

const addEl = document.createElement('button');
addEl.textContent = 'Добавить';
addEl.dataset.action = 'add';
formEl.appendChild(addEl);

const messageEl = document.createElement('div');
messageEl.dataset.id = 'message';
formEl.appendChild(messageEl);

const listEl = document.createElement('ul');
listEl.dataset.id = 'comment-list';
rootEl.appendChild(listEl);

let nextId = 1;
const comments = [];
formEl.onsubmit = (evt) => {
    evt.preventDefault();

    messageEl.textContent = '';
    let error = null;
    const text = commentEl.value.trim();
    if (text === '') {
        error = 'Заполните поле Комментарий';
        messageEl.textContent = error;
        commentEl.focus();
        return;
    }

    const comment = {
        id: nextId++,
        text: text,
    };
    comments.push(comment);

    formEl.reset();
    commentEl.focus();

    const rowEl = document.createElement('li');
    rowEl.textContent = comment.text;
    rowEl.dataset.commentId = comment.id;
    listEl.appendChild(rowEl);
};
