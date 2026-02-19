$(document).ready(function () {

 
  if ($("#loginForm").length) {
    $("#loginForm").on("submit", function (e) {
      e.preventDefault();

      const username = $("#username").val().trim();
      const password = $("#password").val().trim();

      if (!username || !password) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Username and Password are required',
          confirmButtonColor: '#0d2a2e'
        });
        return;
      }

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Login accepted',
        confirmButtonText: 'Continue',
        confirmButtonColor: '#0d2a2e'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "dashboard.html";
        }
      });
    });
  }
$(document).ready(function() {

  // Person Stack
  let personStack = [];

  // Save Person
  $("#saveBtn").click(function() {
    let fname = $("#fname").val().trim();
    let mname = $("#mname").val().trim();
    let lname = $("#lname").val().trim();
    let age = $("#age").val().trim();
    let gmail = $("#gmail").val().trim();

    if (!fname || !lname || !age || !gmail) {
      alert("Please fill in all required fields!");
      return;
    }

    personStack.push({ fname, mname, lname, age, gmail });
    displayTable();
    clearInputs();
  });

  // Display Table
  function displayTable() {
    let table = $("#tableData");
    table.empty();
    personStack.forEach(person => {
      table.append(`
        <tr>
          <td>${person.fname}</td>
          <td>${person.mname}</td>
          <td>${person.lname}</td>
          <td>${person.age}</td>
          <td>${person.gmail}</td>
        </tr>
      `);
    });
  }

  // Clear Inputs
  function clearInputs() {
    $("#fname, #mname, #lname, #age, #gmail").val('');
  }

  // Page Navigation
  window.showPage = function(pageId) {
    $(".page").addClass("hidden");
    $("#" + pageId).removeClass("hidden");
  };

  // Exit System
  window.exitSystem = function() {
    if (confirm("Are you sure you want to exit?")) {
      window.close();
    }
  };

  // Calculator
  let display = $("#display");
  $(".number, .operator").click(function() {
    display.val(display.val() + $(this).text());
  });
  $(".equal").click(function() {
    try { display.val(eval(display.val())); } 
    catch { display.val("Error"); }
  });
  $(".clear").click(function() { display.val(''); });

});
});
