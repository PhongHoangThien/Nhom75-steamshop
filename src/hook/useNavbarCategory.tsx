import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavbarCategory = () => {
    const [open, setOpen] = useState(false);
    const [locked, setLocked] = useState(false);
    const navigate = useNavigate();

    const onHover = () => {
        if (!locked) setOpen(true);
    };

    const onLeave = () => {
        if (!locked) setOpen(false);
    };

    const onClickToggle = () => {
        setOpen(true);
        setLocked(true);
    };

    const close = () => {
        setOpen(false);
        setLocked(false);
    };

    const selectCategory = (category: string) => {
        navigate(`/products?category=${encodeURIComponent(category)}`);
        close();
    };

    return {
        open,
        locked,
        onHover,
        onLeave,
        onClickToggle,
        close,
        selectCategory
    };
};
