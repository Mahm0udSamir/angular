
app.directive("about", function() {
    return {
        template :  '<table ng-controller="infocontroller"> <tr><th>First name</th><th>Last name</th><th>Age</th><th>Department</th></tr>  <tr ng-repeat="e in info|uptoage:searchtext"> <td>{{e.firstName}}</td> <td>{{e.lastName}}</td> <td>{{e.age}}</td> <td>{{e.dept}}</td> </tr></table>'
    };
});
    