import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
} from "react-pro-sidebar";

import { HiOutlineViewGridAdd } from "react-icons/hi";
import { FaRegBuilding } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";

import "react-pro-sidebar/dist/css/styles.css";
import "../components/Sidebar.css";


const Sidebar = ({showHideCitizens, showHideBuildings, showHideMap}) => { 

  return (
    <>
      <div id="sidebar">
      <ProSidebar>
        <div className="logotext">
          <p>Moop City</p>
        </div>
          <SidebarContent>
            <Menu iconShape="square">
              <div className="menu-items">
              <MenuItem icon={<HiOutlineViewGridAdd />} onClick={showHideMap}><p className="menuText">Allotment</p></MenuItem>
              <MenuItem icon={<FaRegBuilding />} onClick={showHideBuildings}><p className="menuText">Building</p></MenuItem>
              <MenuItem icon={<IoPersonAddOutline />} onClick={showHideCitizens}><p className="menuText">Citizen</p></MenuItem>
              </div>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;