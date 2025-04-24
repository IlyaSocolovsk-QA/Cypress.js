describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восс. пароль

         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти

         cy.wait(5000);

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
         
    })


it('верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восс. пароль

    cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
    cy.get('#pass').type('iLoveqastudio7'); // Ввели неверный пароль
    cy.get('#loginButton').click(); // Нажал войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авт. вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    
})

it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восс. пароль

    cy.get('#mail').type('ggerman@dolnikov.ru'); // Ввели не верный логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажал войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авт. вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    
})

it('Проверка что в логине есть @', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восс. пароль

    cy.get('#mail').type('germandolnikov.ru'); // Ввел логин без @
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажал войти

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю что после авт. вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    
})

it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восс. пароль

    cy.get('#forgotEmailButton').click(); // Нажимаю восстановить пароль
    cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел почту для восстановления 
    cy.get('#restoreEmailButton').click(); // Нажал отправить код

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    
})

it('Проверка восстановления пароля несуществующим E-mail', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восс. пароль

    cy.get('#forgotEmailButton').click(); // Нажимаю восстановить пароль
    cy.get('#mailForgot').type('gfgfgfgfgfgferman@dolnikov.ru'); // Ввел несуществующую почту для восстановления 
    cy.get('#restoreEmailButton').click(); // Нажал отправить код

    cy.get('#messageHeader').contains('Такого E-mail не существует'); // Проверяю на совпадение текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    
})

it('Верный пароль и верный логин с использованием строчных букв', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восс. пароль

    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели верный логин с использованием строчных букв
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажал войти

    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авт. вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    
})

})