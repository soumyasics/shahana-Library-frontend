import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer class="p-4 bg-black text-white ">/
    <div class="row">
        <div class="col">
            <p>2024 LMS System. All Rights reserved</p>
        </div>
        <div class="col d-flex justify-content-end">
            <ul class="list-inline">
                <li class="list-inline-item"><a class="text-white text-decoration-none" href="#">Terms
                    of services | </a></li>
                <li class="list-inline-item"><a class="text-white text-decoration-none" href="#">Privacy policy | </a>
                </li>
                <li class="list-inline-item"><a class="text-white text-decoration-none" href="#">Site map</a></li>
            </ul>
        </div>
    </div>
</footer>
  )
}
  



   

export default Footer