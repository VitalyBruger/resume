/*
  There is no connection to the database in demo mode.
*/
var tblUsers = [
  {login:'admin',password:'1'}
];

var tblDocuments = [
  {Document_ID:'FA964082-77C8-45B9-9847-8F94A75AF81F',Name:'Анкета 1',Status:'9'},
  {Document_ID:'FA8C3474-5EBF-43A9-8D81-99E96FD0EFE9',Name:'Анкета 2',Status:'2'}
]

var tblDocumentSections = [
  {Document_ID: 'FA964082-77C8-45B9-9847-8F94A75AF81F', Section_ID: '295F4E50-A452-4F8B-BD98-080D0255900F', ParentSection_ID: null, Name: 'Акція', Status:2, Level:0},
  {Document_ID: 'FA964082-77C8-45B9-9847-8F94A75AF81F', Section_ID: '2C9787C4-2EF9-4D30-BACD-1EDE67F2C211', ParentSection_ID: null, Name: 'Акція', Status:2, Level:0},
  {Document_ID: 'FA8C3474-5EBF-43A9-8D81-99E96FD0EFE9', Section_ID: 'F422E54A-4A50-479B-B8DA-2913B28ECD75', ParentSection_ID: '4EE5CD80-598A-4550-BBAD-4FC2427B63A5', Name: 'сторінка 3', Status:2, Level:1},
  {Document_ID: 'FA8C3474-5EBF-43A9-8D81-99E96FD0EFE9', Section_ID: '78B8776E-8BFE-475A-B61A-456198B1ED50', ParentSection_ID: null, Name: 'сторінка 1', Status:2, Level:0},
  {Document_ID: 'FA8C3474-5EBF-43A9-8D81-99E96FD0EFE9', Section_ID: '4EE5CD80-598A-4550-BBAD-4FC2427B63A5', ParentSection_ID: null, Name: 'сторінка 2', Status:2, Level:0},
  {Document_ID: 'FA964082-77C8-45B9-9847-8F94A75AF81F', Section_ID: 'B6468DB3-C9E4-434E-99F4-5FD60A3FFB97', ParentSection_ID: '2C9787C4-2EF9-4D30-BACD-1EDE67F2C211', Name: 'Сторінка', Status:2, Level:1},
  {Document_ID: 'FA8C3474-5EBF-43A9-8D81-99E96FD0EFE9', Section_ID: 'CCBBAB66-4CA9-4508-A488-6222CA463EA5', ParentSection_ID: '03C923B2-E4EA-43A0-80C9-8B2A8AA39D16', Name: 'сторінка 6 рівень', Status:2, Level:4},
  {Document_ID: 'FA964082-77C8-45B9-9847-8F94A75AF81F', Section_ID: '84468BC7-7114-4DF5-B658-7E6E7F4051A1', ParentSection_ID: 'C0C52854-B76A-4FB7-B37D-DC86D6741578', Name: 'New Section11', Status:2, Level:0},
  {Document_ID: 'FA8C3474-5EBF-43A9-8D81-99E96FD0EFE9', Section_ID: 'F36EE3F7-D799-458E-9259-8656F0243F83', ParentSection_ID: 'CCBBAB66-4CA9-4508-A488-6222CA463EA5', Name: 'сторінка 7 рівень', Status:2, Level:5},
  {Document_ID: 'FA8C3474-5EBF-43A9-8D81-99E96FD0EFE9', Section_ID: '03C923B2-E4EA-43A0-80C9-8B2A8AA39D16', ParentSection_ID: '464618F6-49C6-4F35-8F36-A0500D6F6B87', Name: 'сторінка 5 рівень', Status:2, Level:3},
  {Document_ID: 'FA8C3474-5EBF-43A9-8D81-99E96FD0EFE9', Section_ID: '464618F6-49C6-4F35-8F36-A0500D6F6B87', ParentSection_ID: 'F422E54A-4A50-479B-B8DA-2913B28ECD75', Name: 'сторінка 4', Status:2, Level:2},
  {Document_ID: 'FA8C3474-5EBF-43A9-8D81-99E96FD0EFE9', Section_ID: 'D4FF191B-0772-4133-A288-BC01A87EEB57', ParentSection_ID: 'F36EE3F7-D799-458E-9259-8656F0243F83', Name: 'сторінка 8 рівень', Status:2, Level:6},
  {Document_ID: 'FA964082-77C8-45B9-9847-8F94A75AF81F', Section_ID: 'C0C52854-B76A-4FB7-B37D-DC86D6741578', ParentSection_ID: null, Name: 'New Section1', Status:2, Level:0},
  {Document_ID: 'FA964082-77C8-45B9-9847-8F94A75AF81F', Section_ID: '21F71CB2-11A8-4E53-A8F1-F2BF8E2ECB2D', ParentSection_ID: '84468BC7-7114-4DF5-B658-7E6E7F4051A1', Name: 'New Section111', Status:2, Level:0}
]

var tblDocumentItems = [
  {Item_ID: 'A326E445-3EEB-43EE-A285-0B4DCEB95422', Section_ID: '2C9787C4-2EF9-4D30-BACD-1EDE67F2C211', DisplayValue: 'New item', ValueType:0, ControlType:0, SortOrder:0, Status:2},
  {Item_ID: '2971B573-0B03-48ED-9507-304674108083', Section_ID: '78B8776E-8BFE-475A-B61A-456198B1ED50', DisplayValue: 'елем 1 2', ValueType:0, ControlType:0, SortOrder:10, Status:2},
  {Item_ID: 'BE855B6F-8558-4CE2-88C8-8725829C3865', Section_ID: 'B6468DB3-C9E4-434E-99F4-5FD60A3FFB97', DisplayValue: '222', ValueType:0, ControlType:0, SortOrder:0, Status:2},
  {Item_ID: '1DC3D17C-092E-42BC-941D-8FCDC5E9145C', Section_ID: '295F4E50-A452-4F8B-BD98-080D0255900F', DisplayValue: 'Проведення акції в ТТ', ValueType:3, ControlType:3, SortOrder:0, Status:2},
  {Item_ID: '98EB9C88-18FC-421A-A52C-90D0A98848C3', Section_ID: '2C9787C4-2EF9-4D30-BACD-1EDE67F2C211', DisplayValue: 'Рівень зацікавленності', ValueType:0, ControlType:1, SortOrder:10, Status:2},
  {Item_ID: '5CA547A7-91A3-4896-903D-BB19DB99516F', Section_ID: '2C9787C4-2EF9-4D30-BACD-1EDE67F2C211', DisplayValue: 'Проведення акції в ТТ', ValueType:3, ControlType:3, SortOrder:0, Status:2},
  {Item_ID: 'F3005224-FEC9-4A31-A513-C1ED998E29DE', Section_ID: '78B8776E-8BFE-475A-B61A-456198B1ED50', DisplayValue: 'елем 1 ', ValueType:0, ControlType:0, SortOrder:0, Status:2},
  {Item_ID: '50D18BA5-231D-4C63-93AA-C3896A5230B3', Section_ID: '295F4E50-A452-4F8B-BD98-080D0255900F', DisplayValue: 'Рівень зацікавленності', ValueType:0, ControlType:1, SortOrder:10, Status:2},
  {Item_ID: '8FFDC973-212D-43B1-B321-DCEBE6614CEE', Section_ID: '295F4E50-A452-4F8B-BD98-080D0255900F', DisplayValue: 'New item', ValueType:0, ControlType:0, SortOrder:0, Status:2}
]


exports.isUser = function(userLogin,userPassword, callback) {
  if (tblUsers.find(item => item.login == userLogin).password ==  userPassword){
    callback(null,true);
  } else {
    callback(null,false);
  }
}

exports.getDocuments = function(callback) {
  callback(null,tblDocuments);
}

exports.getDocument = function(document_id,callback) {
  callback(null,tblDocuments.filter(item => item.Document_ID == document_id));
}

exports.getDocumentSections = function(document_id,callback) {
  callback(null,tblDocumentSections.filter(item => item.Document_ID == document_id));
}

exports.getDocumentItems = function(document_id,callback) {
  var sections = tblDocumentSections.filter(item => item.Document_ID == document_id).map(item => item.Section_ID);
  callback(null,tblDocumentItems.filter(item => sections.includes(item.Section_ID)));
}
