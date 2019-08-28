import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  languages = ['en', 'ua'];
  public language = 'en';

  private dictionary = [
    { word: 'aboutme', 'en': 'About Me', 'ua': 'Про мене' },
    { word: 'downloadresume', 'en': 'Download this resume', 'ua': 'Завантажити резюме' },
    { word: 'emailme', 'en': 'Email me', 'ua': 'Напишіть мені' },
    { word: 'github', 'en': 'Follow on github', 'ua': 'Слідкуйте в github' },
    { word: 'linkedin', 'en': 'Follow on linkedin', 'ua': 'Слідкуйте в linkedin' },
    { word: 'facebook', 'en': 'Follow on facebook', 'ua': 'Слідкуйте в facebook' },
    { word: 'abouttest', 'en': 'About Project', 'ua': 'Про проект' },
    { word: 'fullname', 'en': 'Full Name', 'ua': 'Повне ім`я' },
    { word: 'vbruger', 'en': 'Vitaly Bruger', 'ua': 'Віталій Бругер' },
    { word: 'location', 'en': 'Location', 'ua': 'Місцезнаходження' },
    { word: 'lviv', 'en': 'Lviv', 'ua': 'Львів' },
    { word: 'zip', 'en': 'ZIP', 'ua': 'Індекс' },
    { word: 'contacts', 'en': 'Contacts', 'ua': 'Контакти' },
    { word: 'email', 'en': 'Email', 'ua': 'Пошта' },
    { word: 'auth', 'en': 'Authentication', 'ua': 'Аутентифікація' },
    { word: 'login', 'en': 'Login', 'ua': 'Вхід' },
    { word: 'logout', 'en': 'Logout', 'ua': 'Вихід' },
    { word: 'ankets', 'en': 'Documents', 'ua': 'Анкети' },
    { word: 'anket', 'en': 'Document', 'ua': 'Анкета' },
    { word: 'documentid', 'en': 'Document ID', 'ua': 'Код анкети' },
    { word: 'documentname', 'en': 'Document name', 'ua': 'Назва анкети' },
    { word: 'status', 'en': 'Status', 'ua': 'Статус' },
    { word: 'details', 'en': 'Details', 'ua': 'Деталі' },
    { word: 'tree', 'en': 'Page tree', 'ua': 'Дерево сторінок' },
    { word: 'page', 'en': 'Page', 'ua': 'Сторінка' },
    { word: 'pageid', 'en': 'Page ID', 'ua': 'Код сторінки' },
    { word: 'pagename', 'en': 'Page name', 'ua': 'Назва сторінки' },
    { word: 'pageelements', 'en': 'Page elemets', 'ua': 'Елементи сторінки' },
    { word: 'elemntid', 'en': 'Element ID', 'ua': 'Код елемента' },
    { word: 'elemntname', 'en': 'Element name', 'ua': 'Назва елемента' },
    { word: 'elemnttype', 'en': 'Element type', 'ua': 'Тип значення' },
    { word: 'elemntcontrol', 'en': 'Element control type', 'ua': 'Тип елемента управління' },
    { word: 'elemntsort', 'en': 'Element sort order', 'ua': 'Порядок сортування' },
    { word: 'active', 'en': 'active', 'ua': 'активний' },
    { word: 'notactive', 'en': 'not active', 'ua': 'не активний' },
    { word: 'workexperience', 'en': 'Work Experience', 'ua': 'Досвід роботи' },
    { word: 'workperiod', 'en': 'Aug 2014 - present', 'ua': 'Серпень 2014 - по сьогодні' },
    { word: 'ssbs', 'en': 'SoftServe Business Systems, Lviv', 'ua': 'SoftServe Business Systems' },
    { word: 'senior', 'en': 'Senior Business Consultant', 'ua': 'Senior Business Consultant' },
    { word: 'responsibilities', 'en': 'Responsibilities', 'ua': 'Обов`язки' },
    { word: 'responsibility1', 'en': 'Software implementation/customer support', 'ua': 'Впровадження ПЗ, підтримка клієнтів' },
    { word: 'responsibility2', 'en': 'Testing mobile and web applications', 'ua': 'Тестування мобільної та веб аплікацій' },
    { word: 'responsibility3', 'en': 'Writing SQL scripts for reports', 'ua': 'Написання SQL скриптів для звітів' },
    { word: 'responsibility4', 'en': 'Employee mentoring', 'ua': 'Наставництво працівників' },
    { word: 'responsibility5', 'en': 'Developing and maintaining specifications/instructions', 'ua': 'Розробка та підтримка специфікацій / інструкцій' },
    { word: 'additionalskills', 'en': 'Additional Skills', 'ua': 'Додаткові навички' },
    { word: 'languages', 'en': 'Languages', 'ua': 'Мови' },
    { word: 'languageEN', 'en': 'English — Intermediate', 'ua': 'Англійська - середній' },
    { word: 'languageRU', 'en': 'Russian — Fluent', 'ua': 'Російська - вільно' },
    { word: 'languageUA', 'en': 'Ukraine — Native', 'ua': 'Українська - рідна' },
    { word: 'wrongpass', 'en': 'incorrect login or password', 'ua': 'неправильний логін або пароль' },
    { word: 'aboutphoto', 'en': 'Looking for Junior Angular developer job', 'ua': 'Шукаю роботу Junior Angular розробника' },
    { word: 'abouttestfull', 'en': `This project was implemented for educational purposes.`, 'ua': `Даний проект був реалізований в учбових цілях.` },
    { word: 'abouttestfull2', 'en': `There is a set of certain documents (questionnaires).`, 'ua': `Є набір певних документів (анкет).` },
    { word: 'abouttestfull3', 'en': `Each questionnaire consists of pages.
    Pages have a hierarchical structure (tree).
    Each page contains a set of items.`, 'ua': ` Кожна анкета складається із сторінок.
    Сторінки мають ієрархічну будову (дерево).
    На кожній сторінці міститься набір елементів.`},
    { word: 'abouttestfull4', 'en': `The task of the project is to display the pages hierarchy and to realize the ability to change the parent object for the page by dragging the elements.`,
      'ua': `Задача проекту відобразити ієрархію сторінок та реалізувати можливість зміни батьківського об'єкту для сторінки за допомогою перетягування елементів.`
    },
    { word: 'abouttestfull5', 'en': `The architecture of the project:`, 'ua': `Архітектура проекту:` },
    { word: 'abouttestfull6', 'en': `Demo version`, 'ua': `Демо версія` }
  ];
  private dictionary2 = {
    'aboutme': { 'en': 'About Me', 'ua': 'Про мене' },
    'abouttest': { 'en': 'About Project', 'ua': 'Про проект' }
  };
  constructor() { }

  translate(text: String) {
    return this.dictionary.find(item => item.word == text)[this.language];
  }

}
