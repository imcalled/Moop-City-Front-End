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


const Sidebar = ({showHideCitizens, showHideBuildings, hideAll}) => { 

  return (
    <>
      <div id="sidebar">
      <ProSidebar>
        <div className="logotext">
          <p>Moop City</p>
        </div>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<HiOutlineViewGridAdd />} onClick={hideAll}>Allotment</MenuItem>
              <MenuItem icon={<FaRegBuilding />} onClick={showHideBuildings}>Building</MenuItem>
              <MenuItem icon={<IoPersonAddOutline />} onClick={showHideCitizens}>Citizen</MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;