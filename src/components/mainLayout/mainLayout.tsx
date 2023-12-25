"use` client";

import { CssBaseline } from "@mui/material";
import React, { PropsWithChildren } from "react";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => (
   <React.Fragment>
      <CssBaseline />
      {children}
   </React.Fragment>
);