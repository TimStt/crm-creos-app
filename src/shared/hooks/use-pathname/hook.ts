import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const usePathname = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState(new URLSearchParams(location.search));

  useEffect(() => {
    setQuery(new URLSearchParams(location.search));
  }, [location]);

  return { query, navigate, location };
};
