/* ========================================================================

Js Grid DB Init

=========================================================================
 */

(function($) {
  (function() {

    var db = {

      loadData: function(filter) {
        return $.grep(this.clients, function(client) {
          return (!filter.نام || client.نام.indexOf(filter.نام) > -1) &&
            (filter.سن === undefined || client.سن === filter.سن) &&
            (!filter.آدرس || client.آدرس.indexOf(filter.آدرس) > -1) &&
            (!filter.کشور || client.کشور === filter.کشور) &&
            (filter.Married === undefined || client.Married === filter.Married);
        });
      },

      insertItem: function(insertingClient) {
        this.clients.push(insertingClient);
      },

      updateItem: function(updatingClient) {},

      deleteItem: function(deletingClient) {
        var clientIndex = $.inArray(deletingClient, this.clients);
        this.clients.splice(clientIndex, 1);
      }

    };

    window.db = db;


    db.countries = [{
        نام: "",
        Id: 0
      },
      {
        نام: "United States",
        Id: 1
      },
      {
        نام: "Canada",
        Id: 2
      },
      {
        نام: "United Kingdom",
        Id: 3
      },
      {
        نام: "France",
        Id: 4
      },
      {
        نام: "Brazil",
        Id: 5
      },
      {
        نام: "China",
        Id: 6
      },
      {
        نام: "Russia",
        Id: 7
      }
    ];

    db.clients = [{
        "نام": "Otto Clay",
        "سن": 61,
        "کشور": 6,
        "آدرس": "Ap #897-1459 Quam Avenue",
        "Married": false
      },
      {
        "نام": "Connor Johnston",
        "سن": 73,
        "کشور": 7,
        "آدرس": "Ap #370-4647 Dis Av.",
        "Married": false
      },
      {
        "نام": "Lacey Hess",
        "سن": 29,
        "کشور": 7,
        "آدرس": "Ap #365-8835 Integer St.",
        "Married": false
      },
      {
        "نام": "Timothy Henson",
        "سن": 78,
        "کشور": 1,
        "آدرس": "911-5143 Luctus Ave",
        "Married": false
      },
      {
        "نام": "Ramona Benton",
        "سن": 43,
        "کشور": 5,
        "آدرس": "Ap #614-689 Vehicula Street",
        "Married": true
      },
      {
        "نام": "Ezra Tillman",
        "سن": 51,
        "کشور": 1,
        "آدرس": "P.O. Box 738, 7583 Quisque St.",
        "Married": true
      },
      {
        "نام": "Dante Carter",
        "سن": 59,
        "کشور": 1,
        "آدرس": "P.O. Box 976, 6316 Lorem, St.",
        "Married": false
      },
      {
        "نام": "Christopher Mcclure",
        "سن": 58,
        "کشور": 1,
        "آدرس": "847-4303 Dictum Av.",
        "Married": true
      },
      {
        "نام": "Ruby Rocha",
        "سن": 62,
        "کشور": 2,
        "آدرس": "5212 Sagittis Ave",
        "Married": false
      },
      {
        "نام": "Imelda Hardin",
        "سن": 39,
        "کشور": 5,
        "آدرس": "719-7009 Auctor Av.",
        "Married": false
      },
      {
        "نام": "Jonah Johns",
        "سن": 28,
        "کشور": 5,
        "آدرس": "P.O. Box 939, 9310 A Ave",
        "Married": false
      },
      {
        "نام": "Herman Rosa",
        "سن": 49,
        "کشور": 7,
        "آدرس": "718-7162 Molestie Av.",
        "Married": true
      },
      {
        "نام": "Arthur Gay",
        "سن": 20,
        "کشور": 7,
        "آدرس": "5497 Neque Street",
        "Married": false
      },
      {
        "نام": "Xena Wilkerson",
        "سن": 63,
        "کشور": 1,
        "آدرس": "Ap #303-6974 Proin Street",
        "Married": true
      },
      {
        "نام": "Lilah Atkins",
        "سن": 33,
        "کشور": 5,
        "آدرس": "622-8602 Gravida Ave",
        "Married": true
      },
      {
        "نام": "Malik Shepard",
        "سن": 59,
        "کشور": 1,
        "آدرس": "967-5176 Tincidunt Av.",
        "Married": false
      },
      {
        "نام": "Keely Silva",
        "سن": 24,
        "کشور": 1,
        "آدرس": "P.O. Box 153, 8995 Praesent Ave",
        "Married": false
      },
      {
        "نام": "Hunter Pate",
        "سن": 73,
        "کشور": 7,
        "آدرس": "P.O. Box 771, 7599 Ante, Road",
        "Married": false
      },
      {
        "نام": "Mikayla Roach",
        "سن": 55,
        "کشور": 5,
        "آدرس": "Ap #438-9886 Donec Rd.",
        "Married": true
      },
      {
        "نام": "Upton Joseph",
        "سن": 48,
        "کشور": 4,
        "آدرس": "Ap #896-7592 Habitant St.",
        "Married": true
      },
      {
        "نام": "Jeanette Pate",
        "سن": 59,
        "کشور": 2,
        "آدرس": "P.O. Box 177, 7584 Amet, St.",
        "Married": false
      },
      {
        "نام": "Kaden Hernandez",
        "سن": 79,
        "کشور": 3,
        "آدرس": "366 Ut St.",
        "Married": true
      },
      {
        "نام": "Kenyon Stevens",
        "سن": 20,
        "کشور": 3,
        "آدرس": "P.O. Box 704, 4580 Gravida Rd.",
        "Married": false
      },
      {
        "نام": "Jerome Harper",
        "سن": 31,
        "کشور": 5,
        "آدرس": "2464 Porttitor Road",
        "Married": false
      },
      {
        "نام": "Jelani Patel",
        "سن": 36,
        "کشور": 2,
        "آدرس": "P.O. Box 541, 5805 Nec Av.",
        "Married": true
      },
      {
        "نام": "Keaton Oconnor",
        "سن": 21,
        "کشور": 1,
        "آدرس": "Ap #657-1093 Nec, Street",
        "Married": false
      },
      {
        "نام": "Bree Johnston",
        "سن": 31,
        "کشور": 2,
        "آدرس": "372-5942 Vulputate Avenue",
        "Married": false
      },
      {
        "نام": "Maisie Hodges",
        "سن": 70,
        "کشور": 7,
        "آدرس": "P.O. Box 445, 3880 Odio, Rd.",
        "Married": false
      },
      {
        "نام": "Kuame Calhoun",
        "سن": 39,
        "کشور": 2,
        "آدرس": "P.O. Box 609, 4105 Rutrum St.",
        "Married": true
      },
      {
        "نام": "Carlos Cameron",
        "سن": 38,
        "کشور": 5,
        "آدرس": "Ap #215-5386 A, Avenue",
        "Married": false
      },
      {
        "نام": "Fulton Parsons",
        "سن": 25,
        "کشور": 7,
        "آدرس": "P.O. Box 523, 3705 Sed Rd.",
        "Married": false
      },
      {
        "نام": "Wallace Christian",
        "سن": 43,
        "کشور": 3,
        "آدرس": "416-8816 Mauris Avenue",
        "Married": true
      },
      {
        "نام": "Caryn Maldonado",
        "سن": 40,
        "کشور": 1,
        "آدرس": "108-282 Nonummy Ave",
        "Married": false
      },
      {
        "نام": "Whilemina Frank",
        "سن": 20,
        "کشور": 7,
        "آدرس": "P.O. Box 681, 3938 Egestas. Av.",
        "Married": true
      },
      {
        "نام": "Emery Moon",
        "سن": 41,
        "کشور": 4,
        "آدرس": "Ap #717-8556 Non Road",
        "Married": true
      },
      {
        "نام": "Price Watkins",
        "سن": 35,
        "کشور": 4,
        "آدرس": "832-7810 Nunc Rd.",
        "Married": false
      },
      {
        "نام": "Lydia Castillo",
        "سن": 59,
        "کشور": 7,
        "آدرس": "5280 Placerat, Ave",
        "Married": true
      },
      {
        "نام": "Lawrence Conway",
        "سن": 53,
        "کشور": 1,
        "آدرس": "Ap #452-2808 Imperdiet St.",
        "Married": false
      },
      {
        "نام": "Kalia Nicholson",
        "سن": 67,
        "کشور": 5,
        "آدرس": "P.O. Box 871, 3023 Tellus Road",
        "Married": true
      },
      {
        "نام": "Brielle Baxter",
        "سن": 45,
        "کشور": 3,
        "آدرس": "Ap #822-9526 Ut, Road",
        "Married": true
      },
      {
        "نام": "Valentine Brady",
        "سن": 72,
        "کشور": 7,
        "آدرس": "8014 Enim. Road",
        "Married": true
      },
      {
        "نام": "Rebecca Gardner",
        "سن": 57,
        "کشور": 4,
        "آدرس": "8655 Arcu. Road",
        "Married": true
      },
      {
        "نام": "Vladimir Tate",
        "سن": 26,
        "کشور": 1,
        "آدرس": "130-1291 Non, Rd.",
        "Married": true
      },
      {
        "نام": "Vernon Hays",
        "سن": 56,
        "کشور": 4,
        "آدرس": "964-5552 In Rd.",
        "Married": true
      },
      {
        "نام": "Allegra Hull",
        "سن": 22,
        "کشور": 4,
        "آدرس": "245-8891 Donec St.",
        "Married": true
      },
      {
        "نام": "Hu Hendrix",
        "سن": 65,
        "کشور": 7,
        "آدرس": "428-5404 Tempus Ave",
        "Married": true
      },
      {
        "نام": "Kenyon Battle",
        "سن": 32,
        "کشور": 2,
        "آدرس": "921-6804 Lectus St.",
        "Married": false
      },
      {
        "نام": "Gloria Nielsen",
        "سن": 24,
        "کشور": 4,
        "آدرس": "Ap #275-4345 Lorem, Street",
        "Married": true
      },
      {
        "نام": "Illiana Kidd",
        "سن": 59,
        "کشور": 2,
        "آدرس": "7618 Lacus. Av.",
        "Married": false
      },
      {
        "نام": "Adria Todd",
        "سن": 68,
        "کشور": 6,
        "آدرس": "1889 Tincidunt Road",
        "Married": false
      },
      {
        "نام": "Kirsten Mayo",
        "سن": 71,
        "کشور": 1,
        "آدرس": "100-8640 Orci, Avenue",
        "Married": false
      },
      {
        "نام": "Willa Hobbs",
        "سن": 60,
        "کشور": 6,
        "آدرس": "P.O. Box 323, 158 Tristique St.",
        "Married": false
      },
      {
        "نام": "Alexis Clements",
        "سن": 69,
        "کشور": 5,
        "آدرس": "P.O. Box 176, 5107 Proin Rd.",
        "Married": false
      },
      {
        "نام": "Akeem Conrad",
        "سن": 60,
        "کشور": 2,
        "آدرس": "282-495 Sed Ave",
        "Married": true
      },
      {
        "نام": "Montana Silva",
        "سن": 79,
        "کشور": 6,
        "آدرس": "P.O. Box 120, 9766 Consectetuer St.",
        "Married": false
      },
      {
        "نام": "Kaseem Hensley",
        "سن": 77,
        "کشور": 6,
        "آدرس": "Ap #510-8903 Mauris. Av.",
        "Married": true
      },
      {
        "نام": "Christopher Morton",
        "سن": 35,
        "کشور": 5,
        "آدرس": "P.O. Box 234, 3651 Sodales Avenue",
        "Married": false
      },
      {
        "نام": "Wade Fernandez",
        "سن": 49,
        "کشور": 6,
        "آدرس": "740-5059 Dolor. Road",
        "Married": true
      },
      {
        "نام": "Illiana Kirby",
        "سن": 31,
        "کشور": 2,
        "آدرس": "527-3553 Mi Ave",
        "Married": false
      },
      {
        "نام": "Kimberley Hurley",
        "سن": 65,
        "کشور": 5,
        "آدرس": "P.O. Box 637, 9915 Dictum St.",
        "Married": false
      },
      {
        "نام": "Arthur Olsen",
        "سن": 74,
        "کشور": 5,
        "آدرس": "887-5080 Eget St.",
        "Married": false
      },
      {
        "نام": "Brody Potts",
        "سن": 59,
        "کشور": 2,
        "آدرس": "Ap #577-7690 Sem Road",
        "Married": false
      },
      {
        "نام": "Dillon Ford",
        "سن": 60,
        "کشور": 1,
        "آدرس": "Ap #885-9289 A, Av.",
        "Married": true
      },
      {
        "نام": "Hannah Juarez",
        "سن": 61,
        "کشور": 2,
        "آدرس": "4744 Sapien, Rd.",
        "Married": true
      },
      {
        "نام": "Vincent Shaffer",
        "سن": 25,
        "کشور": 2,
        "آدرس": "9203 Nunc St.",
        "Married": true
      },
      {
        "نام": "George Holt",
        "سن": 27,
        "کشور": 6,
        "آدرس": "4162 Cras Rd.",
        "Married": false
      },
      {
        "نام": "Tobias Bartlett",
        "سن": 74,
        "کشور": 4,
        "آدرس": "792-6145 Mauris St.",
        "Married": true
      },
      {
        "نام": "Xavier Hooper",
        "سن": 35,
        "کشور": 1,
        "آدرس": "879-5026 Interdum. Rd.",
        "Married": false
      },
      {
        "نام": "Declan Dorsey",
        "سن": 31,
        "کشور": 2,
        "آدرس": "Ap #926-4171 Aenean Road",
        "Married": true
      },
      {
        "نام": "Clementine Tran",
        "سن": 43,
        "کشور": 4,
        "آدرس": "P.O. Box 176, 9865 Eu Rd.",
        "Married": true
      },
      {
        "نام": "Pamela Moody",
        "سن": 55,
        "کشور": 6,
        "آدرس": "622-6233 Luctus Rd.",
        "Married": true
      },
      {
        "نام": "Julie Leon",
        "سن": 43,
        "کشور": 6,
        "آدرس": "Ap #915-6782 Sem Av.",
        "Married": true
      },
      {
        "نام": "Shana Nolan",
        "سن": 79,
        "کشور": 5,
        "آدرس": "P.O. Box 603, 899 Eu St.",
        "Married": false
      },
      {
        "نام": "Vaughan Moody",
        "سن": 37,
        "کشور": 5,
        "آدرس": "880 Erat Rd.",
        "Married": false
      },
      {
        "نام": "Randall Reeves",
        "سن": 44,
        "کشور": 3,
        "آدرس": "1819 Non Street",
        "Married": false
      },
      {
        "نام": "Dominic Raymond",
        "سن": 68,
        "کشور": 1,
        "آدرس": "Ap #689-4874 Nisi Rd.",
        "Married": true
      },
      {
        "نام": "Lev Pugh",
        "سن": 69,
        "کشور": 5,
        "آدرس": "Ap #433-6844 Auctor Avenue",
        "Married": true
      },
      {
        "نام": "Desiree Hughes",
        "سن": 80,
        "کشور": 4,
        "آدرس": "605-6645 Fermentum Avenue",
        "Married": true
      },
      {
        "نام": "Idona Oneill",
        "سن": 23,
        "کشور": 7,
        "آدرس": "751-8148 Aliquam Avenue",
        "Married": true
      },
      {
        "نام": "Lani Mayo",
        "سن": 76,
        "کشور": 1,
        "آدرس": "635-2704 Tristique St.",
        "Married": true
      },
      {
        "نام": "Cathleen Bonner",
        "سن": 40,
        "کشور": 1,
        "آدرس": "916-2910 Dolor Av.",
        "Married": false
      },
      {
        "نام": "Sydney Murray",
        "سن": 44,
        "کشور": 5,
        "آدرس": "835-2330 Fringilla St.",
        "Married": false
      },
      {
        "نام": "Brenna Rodriguez",
        "سن": 77,
        "کشور": 6,
        "آدرس": "3687 Imperdiet Av.",
        "Married": true
      },
      {
        "نام": "Alfreda Mcdaniel",
        "سن": 38,
        "کشور": 7,
        "آدرس": "745-8221 Aliquet Rd.",
        "Married": true
      },
      {
        "نام": "Zachery Atkins",
        "سن": 30,
        "کشور": 1,
        "آدرس": "549-2208 Auctor. Road",
        "Married": true
      },
      {
        "نام": "Amelia Rich",
        "سن": 56,
        "کشور": 4,
        "آدرس": "P.O. Box 734, 4717 Nunc Rd.",
        "Married": false
      },
      {
        "نام": "Kiayada Witt",
        "سن": 62,
        "کشور": 3,
        "آدرس": "Ap #735-3421 Malesuada Avenue",
        "Married": false
      },
      {
        "نام": "Lysandra Pierce",
        "سن": 36,
        "کشور": 1,
        "آدرس": "Ap #146-2835 Curabitur St.",
        "Married": true
      },
      {
        "نام": "Cara Rios",
        "سن": 58,
        "کشور": 4,
        "آدرس": "Ap #562-7811 Quam. Ave",
        "Married": true
      },
      {
        "نام": "Austin Andrews",
        "سن": 55,
        "کشور": 7,
        "آدرس": "P.O. Box 274, 5505 Sociis Rd.",
        "Married": false
      },
      {
        "نام": "Lillian Peterson",
        "سن": 39,
        "کشور": 2,
        "آدرس": "6212 A Avenue",
        "Married": false
      },
      {
        "نام": "Adria Beach",
        "سن": 29,
        "کشور": 2,
        "آدرس": "P.O. Box 183, 2717 Nunc Avenue",
        "Married": true
      },
      {
        "نام": "Oleg Durham",
        "سن": 80,
        "کشور": 4,
        "آدرس": "931-3208 Nunc Rd.",
        "Married": false
      },
      {
        "نام": "Casey Reese",
        "سن": 60,
        "کشور": 4,
        "آدرس": "383-3675 Ultrices, St.",
        "Married": false
      },
      {
        "نام": "Kane Burnett",
        "سن": 80,
        "کشور": 1,
        "آدرس": "759-8212 Dolor. Ave",
        "Married": false
      },
      {
        "نام": "Stewart Wilson",
        "سن": 46,
        "کشور": 7,
        "آدرس": "718-7845 Sagittis. Av.",
        "Married": false
      },
      {
        "نام": "Charity Holcomb",
        "سن": 31,
        "کشور": 6,
        "آدرس": "641-7892 Enim. Ave",
        "Married": false
      },
      {
        "نام": "Kyra Cummings",
        "سن": 43,
        "کشور": 4,
        "آدرس": "P.O. Box 702, 6621 Mus. Av.",
        "Married": false
      },
      {
        "نام": "Stuart Wallace",
        "سن": 25,
        "کشور": 7,
        "آدرس": "648-4990 Sed Rd.",
        "Married": true
      },
      {
        "نام": "Carter Clarke",
        "سن": 59,
        "کشور": 6,
        "آدرس": "Ap #547-2921 A Street",
        "Married": false
      }
    ];

    db.users = [{
        "ID": "x",
        "Account": "A758A693-0302-03D1-AE53-EEFE22855556",
        "Name": "Carson Kelley",
        "RegisterDate": "2002-04-20T22:55:52-07:00"
      },
      {
        "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
        "Name": "Prescott Griffin",
        "RegisterDate": "2011-02-22T05:59:55-08:00"
      },
      {
        "Account": "06FAAD9A-5114-08F6-D60C-961B2528B4F0",
        "Name": "Amir Saunders",
        "RegisterDate": "2014-08-13T09:17:49-07:00"
      },
      {
        "Account": "EED7653D-7DD9-A722-64A8-36A55ECDBE77",
        "Name": "Derek Thornton",
        "RegisterDate": "2012-02-27T01:31:07-08:00"
      },
      {
        "Account": "2A2E6D40-FEBD-C643-A751-9AB4CAF1E2F6",
        "Name": "Fletcher Romero",
        "RegisterDate": "2010-06-25T15:49:54-07:00"
      },
      {
        "Account": "3978F8FA-DFF0-DA0E-0A5D-EB9D281A3286",
        "Name": "Thaddeus Stein",
        "RegisterDate": "2013-11-10T07:29:41-08:00"
      },
      {
        "Account": "658DBF5A-176E-569A-9273-74FB5F69FA42",
        "Name": "Nash Knapp",
        "RegisterDate": "2005-06-24T09:11:19-07:00"
      },
      {
        "Account": "76D2EE4B-7A73-1212-F6F2-957EF8C1F907",
        "Name": "Quamar Vega",
        "RegisterDate": "2011-04-13T20:06:29-07:00"
      },
      {
        "Account": "00E46809-A595-CE82-C5B4-D1CAEB7E3E58",
        "Name": "Philip Galloway",
        "RegisterDate": "2008-08-21T18:59:38-07:00"
      },
      {
        "Account": "C196781C-DDCC-AF83-DDC2-CA3E851A47A0",
        "Name": "Mason French",
        "RegisterDate": "2000-11-15T00:38:37-08:00"
      },
      {
        "Account": "5911F201-818A-B393-5888-13157CE0D63F",
        "Name": "Ross Cortez",
        "RegisterDate": "2010-05-27T17:35:32-07:00"
      },
      {
        "Account": "B8BB78F9-E1A1-A956-086F-E12B6FE168B6",
        "Name": "Logan King",
        "RegisterDate": "2003-07-08T16:58:06-07:00"
      },
      {
        "Account": "06F636C3-9599-1A2D-5FD5-86B24ADDE626",
        "Name": "Cedric Leblanc",
        "RegisterDate": "2011-06-30T14:30:10-07:00"
      },
      {
        "Account": "FE880CDD-F6E7-75CB-743C-64C6DE192412",
        "Name": "Simon Sullivan",
        "RegisterDate": "2013-06-11T16:35:07-07:00"
      },
      {
        "Account": "BBEDD673-E2C1-4872-A5D3-C4EBD4BE0A12",
        "Name": "Jamal West",
        "RegisterDate": "2001-03-16T20:18:29-08:00"
      },
      {
        "Account": "19BC22FA-C52E-0CC6-9552-10365C755FAC",
        "Name": "Hector Morales",
        "RegisterDate": "2012-11-01T01:56:34-07:00"
      },
      {
        "Account": "A8292214-2C13-5989-3419-6B83DD637D6C",
        "Name": "Herrod Hart",
        "RegisterDate": "2008-03-13T19:21:04-07:00"
      },
      {
        "Account": "0285564B-F447-0E7F-EAA1-7FB8F9C453C8",
        "Name": "Clark Maxwell",
        "RegisterDate": "2004-08-05T08:22:24-07:00"
      },
      {
        "Account": "EA78F076-4F6E-4228-268C-1F51272498AE",
        "Name": "Reuben Walter",
        "RegisterDate": "2011-01-23T01:55:59-08:00"
      },
      {
        "Account": "6A88C194-EA21-426F-4FE2-F2AE33F51793",
        "Name": "Ira Ingram",
        "RegisterDate": "2008-08-15T05:57:46-07:00"
      },
      {
        "Account": "4275E873-439C-AD26-56B3-8715E336508E",
        "Name": "Damian Morrow",
        "RegisterDate": "2015-09-13T01:50:55-07:00"
      },
      {
        "Account": "A0D733C4-9070-B8D6-4387-D44F0BA515BE",
        "Name": "Macon Farrell",
        "RegisterDate": "2011-03-14T05:41:40-07:00"
      },
      {
        "Account": "B3683DE8-C2FA-7CA0-A8A6-8FA7E954F90A",
        "Name": "Joel Galloway",
        "RegisterDate": "2003-02-03T04:19:01-08:00"
      },
      {
        "Account": "01D95A8E-91BC-2050-F5D0-4437AAFFD11F",
        "Name": "Rigel Horton",
        "RegisterDate": "2015-06-20T11:53:11-07:00"
      },
      {
        "Account": "F0D12CC0-31AC-A82E-FD73-EEEFDBD21A36",
        "Name": "Sylvester Gaines",
        "RegisterDate": "2004-03-12T09:57:13-08:00"
      },
      {
        "Account": "874FCC49-9A61-71BC-2F4E-2CE88348AD7B",
        "Name": "Abbot Mckay",
        "RegisterDate": "2008-12-26T20:42:57-08:00"
      },
      {
        "Account": "B8DA1912-20A0-FB6E-0031-5F88FD63EF90",
        "Name": "Solomon Green",
        "RegisterDate": "2013-09-04T01:44:47-07:00"
      }
    ];

  }());
})(jQuery);