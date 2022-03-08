import { Outlet, Link } from "react-router-dom";
import React from "react";
import llista from "./llista";

export function Layout() {
  return (
    <>
      <header>Exercicis React</header>
      <div class="HolyGrail-body">
        <main class="HolyGrail-content">
          <Outlet />
        </main>
        <nav class="HolyGrail-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {llista.map((el) => (
              <li>
                <Link to={el.path}>{el.titol}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <aside class="HolyGrail-ads">Aside</aside>
      </div>
      <footer>by Nuria Viana</footer>
    </>
  );
}
