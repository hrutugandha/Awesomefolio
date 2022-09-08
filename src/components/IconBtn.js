import React from "react";
import { Box, Link, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

const IconBtn = ({children, icon: Icon, href,fontSize, ...rest }) => {
    const classes = useStyles({fontSize});
    return (
        <Box
            display="inline"
            {...rest}
            component={motion.div}
            whileHover={{ scale: 1.1 }}
        >
            <Link  target="_blank" rel="noreferrer" to={href}>
                <Icon className={classes.icon} />
            </Link>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    icon: {
        color: theme.palette.text.secondary,
        transition: "0.1s",
        cursor: "pointer",
        fontSize: props => props.fontSize ? `${props.fontSize}px` : "32px",
        "&:hover": {
            color: theme.palette.text.primary
        }
    },
}));

export default IconBtn;
