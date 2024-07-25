import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const usePathname = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useMemo(() => new URLSearchParams(location.search), [location]);

  return { query, navigate, location };
};
