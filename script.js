$( function() {
    $( "#datepicker" ).datepicker({
      dateFormat: "dd-mm-yy"
    });
});
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
      document.getElementById("stateErr").style.display = "none";
      document.getElementById("distErr").style.display = "none";
      document.getElementById("dateErr").style.display = "none";
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
  async function getSessionsByDistrictId() {
      if(document.getElementById('districtId').value=="") {
        alert("please select district");
        return false;
      }
      if(document.getElementById('datepicker').value=="") {
        alert("please select date");
        return false;
      }
      let districtId = document.getElementById('districtId').value;
      let sessionDate = document.getElementById('datepicker').value;
      // Storing response
      //sessionDate = "12-06-2021";
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
// Calling that async function
getStates();

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function showStates(data) {
    let tab =
        `<select class="form-control" onchange="getDistrictsByStateId(this.value)" id="stateId"><option value="">Select State</option>`;

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
        `<select class="form-control" id="districtId"><option value="">Select District</option>`;

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
        `<h1>Sessions:</h1>
        <div style="overflow-x:auto;border: black 1px solid;">
        <table class="table table-bordered">
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
    if(data.sessions.length) {
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
    } else {
      tab += `<tr>
                <td colspan="12"><center><strong>No Records Found</strong></center></td>
              </tr>`;
    }
    tab += `</tbody></table></div>`;
    // Setting innerHTML as tab variable
    document.getElementById("sessions").style.display = "block";
    document.getElementById("sessions").innerHTML = tab;
}
function getSessionByDistId() {
    document.getElementById("stateErr").style.display = "none";
    document.getElementById("distErr").style.display = "none";
    document.getElementById("dateErr").style.display = "none";

    if(document.getElementById('stateId').value!="" && document.getElementById('districtId').value!="" && document.getElementById('datepicker').value!="") {
      getSessionsByDistrictId();
    } else {
      if(document.getElementById('stateId').value=="") {
        document.getElementById("stateErr").style.display = "block";
        document.getElementById("stateErr").innerHTML="State value required";
      }
      if(document.getElementById('districtId').value=="") {
        document.getElementById("distErr").style.display = "block";
        document.getElementById("distErr").innerHTML="District value required";
      }
      if(document.getElementById('datepicker').value=="") {
        document.getElementById("dateErr").style.display = "block";
        document.getElementById("dateErr").innerHTML="Date value required";
      }
    }
}
