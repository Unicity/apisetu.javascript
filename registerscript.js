
  // Defining async function
  async function getStates() {

      // Storing response
      const response = await fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states",
                          {
                              method: "GET",
                              mode: 'cors',
                              headers: {
                                  'Content-Type': 'application/json',
                              }
                          }
                      ).then(response => response)

                      .catch((error) => {
                          console.log(error);
                        });

      // Storing data in form of JSON
      var data = await response.json();
      //console.log(data);
      if (response) {
          hideloader();
      }
      showStates(data);
  }
  // Defining async function
  async function getDistrictsByStateId(stateId) {

      // Storing response
      const response = await fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+stateId,
                          {
                              method: "GET",
                              mode: 'cors',
                              headers: {
                                  'Content-Type': 'application/json',
                              }
                          }
                      ).then(response => response)

                      .catch((error) => {
                          console.log(error);
                        });

      // Storing data in form of JSON
      var data = await response.json();
      //console.log(data);
      if (response) {
          hideloader();
      }
      showDistricts(data);
  }
  // Defining async function
  async function getSessionsByDistrictId(districtId, sessionDate) {

      // Storing response
      sessionDate = "11-06-2021";
      const response = await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id="+districtId+"&date="+sessionDate,
                          {
                              method: "GET",
                              mode: 'cors',
                              headers: {
                                  'Content-Type': 'application/json',
                              }
                          }
                      ).then(response => response)

                      .catch((error) => {
                          console.log(error);
                        });

      // Storing data in form of JSON
      var data = await response.json();
      //console.log(data);
      if (response) {
          hideloader();
      }
      showSessions(data);
  }
  // Defining async function
  async function registerMobile() {
      if(document.getElementById("mobile").value != "") {
        var phoneno = /^\d{10}$/;
        if(document.getElementById("mobile").value.match(phoneno)) {
          document.getElementById("regErr").style.display = "none";
          // Storing response
          const response = await $.ajax({
                                      url: "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
                                      type: "post",
                                      mode: 'cors',
                                      data: {mobile:document.getElementById("mobile").value} ,
                                      success: function (response) {
                                        console.log(response);
                                        document.getElementById("txnId").value=response.txnId;
                                        document.getElementById("mobile").disabled="true"
                                        document.getElementById("otp").style.display = "block";
                                        document.getElementById("regbtn").innerHTML="Submit OTP";
                                         return response;
                                      },
                                      error: function(error) {
                                        console.log(error);
                                        document.getElementById("regErr").style.display = "block";
                                        document.getElementById("regErr").innerHTML=error.responseText;
                                         return errorThrown;
                                      }
                                  });

          // Storing data in form of JSON
          var data = await response.json();
          console.log(data);
          if (response) {
              hideloader();
          }
        } else {
          document.getElementById("regErr").style.display = "block";
          document.getElementById("regErr").innerHTML="Enter valid mobile number";
        }
      } else {
        document.getElementById("regErr").style.display = "block";
        document.getElementById("regErr").innerHTML="Enter mobile number";
      }
  }
// Calling that async function
getStates();

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function showStates(data) {
    let tab =
        `<select class="form-control" onchange="getDistrictsByStateId(this.value)"><option value="">Select State</option>`;

    // Loop to access all rows
    for (let r of data.states) {
        tab += `<option value="${r.state_id}">${r.state_name}</option>`;
    }
    tab += `</select>`;
    // Setting innerHTML as tab variable
    document.getElementById("states").innerHTML = tab;
}

// Function to define innerHTML for HTML table
function showDistricts(data) {
    let tab =
        `<select class="form-control" onchange="getSessionsByDistrictId(this.value)"><option value="">Select District</option>`;

    // Loop to access all rows
    for (let r of data.districts) {
        tab += `<option value="${r.district_id}">${r.district_name}</option>`;
    }
    tab += `</select>`;
    // Setting innerHTML as tab variable
    document.getElementById("districts").innerHTML = tab;
}

// Function to define innerHTML for HTML table
function showSessions(data) {
    let tab =
        `<h1>Sessions:</h1><table class="table table-bordered">
    <thead>
      <tr>
        <th>Center Id</th>
        <th>Name</th>
        <th>Block Name</th>
        <th>Address</th>
        <th>Vaccine</th>
        <th>Available</th>
        <th>Min Age Limit</th>
        <th>Date</th>
        <th>Fee | Fee Type</th>
        <th>From - To</th>
        <th>Slots</th>
        <th>Session Id</th>
      </tr>
    </thead>
    <tbody>`;

    // Loop to access all rows
    for (let r of data.sessions) {
        let slots = "";
        for (let s of r.slots) {
          slots +=`<div style="width:125px">${s}</div>`;
        }
        tab += `<tr>
                  <td>${r.center_id}</td>
                  <td>${r.name}</td>
                  <td>${r.block_name}</td>
                  <td>${r.address}, ${r.state_name} - ${r.pincode}</td>
                  <td>${r.vaccine}</td>
                  <td>
                    <div style="width:90px">Capacity: ${r.available_capacity}</div>
                    <div style="width:90px">Dose1: ${r.available_capacity_dose1}</div>
                    <div style="width:90px">Dose2: ${r.available_capacity_dose2}<div>
                  </td>
                  <td>${r.min_age_limit}</td>
                  <td><div style="width:80px">${r.date}</div></td>
                  <td><div style="width:80px">${r.fee} | ${r.fee_type}</div></td>
                  <td><div style="width:125px">${r.from} - ${r.to}</div></td>
                  <td>${slots}</td>
                  <td>${r.session_id}</td>
                </tr>`;
    }
    tab += `</tbody></table>`;
    // Setting innerHTML as tab variable
    document.getElementById("sessions").innerHTML = tab;
}

function showOTP(data) {
    console.log(data);
    document.getElementById("sessions").innerHTML = tab;
}

function cancelRegister() {
  document.getElementById("mobile").value="";
  document.getElementById("regErr").innerHTML="";
  document.getElementById("regErr").style.display = "none";
  document.getElementById("regbtn").innerHTML="Register";
}
