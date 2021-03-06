import React from 'react'

function Navbar() {
  return (
    <div id="app" class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNavDropdown" class="navbar-collapse collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="/addstudent">Addstudents</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/studentdetails">Studentdetails</a>
                </li>

            </ul>
           
        </div>
    </nav>
</div>
  );
}

export default Navbar;
