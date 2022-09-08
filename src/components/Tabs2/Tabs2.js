import React, { useState } from "react";
import { makeStyles, Tabs, Tab, Typography, Box, Link, useTheme, useMediaQuery } from "@material-ui/core";
import { Language, Facebook, Instagram } from "@material-ui/icons";
import { educationList } from "../../data";
import IconBtn from "../../components/IconBtn";
import { useTranslation } from "react-i18next";

const StyledTabs = () => {
    const theme = useTheme();
    const { t } = useTranslation();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles({ isMobile });
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} >
            <Tabs
                orientation={isMobile ? "horizontal" : "vertical"}
                value={value}
                onChange={handleChange}
                className={classes.tabs}
                classes={{ indicator: classes.indicator }}
                centered
            >
                {educationList.map((elem) => (
                    <Tab label={elem.company} key={elem.id} />
                ))}
            </Tabs>
            {educationList.map((elem) => (
                <TabPanel value={value} index={elem.id} key={elem.id}>
                    <Box mb={4}>
                        <Typography variant="h5">
                            {t(`education_${elem.id}_job`)} @{" "}
                            <Link
                             target="_blank"
                             rel="noreferrer"
                                href={elem.links.website || elem.links.facebook || elem.links.instagram}
                                color="primary"
                            >
                                {elem.company}
                            </Link>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" fontSize="14">
                            {t(`education_${elem.id}_duration`)}
                        </Typography>
                    </Box>
                    <Box mb={4}>
                        <Typography variant="body1" color="textPrimary">
                            {t(`education_${elem.id}_overview`)}
                        </Typography>
                    </Box>
                    <Box>
                        {elem.links.website && (
                            <a href={elem.links.website} target="_blank" rel="noreferrer" >
                                <IconBtn icon={Language} fontSize={28} m={1}/>
                            </a>
                        )}
                        {elem.links.facebook && (
                            <a href={elem.links.facebook}target="_blank" rel="noreferrer">
                                <IconBtn icon={Facebook} fontSize={28} m={1} />
                            </a>
                        )}
                        {elem.links.instagram && (
                           <a href={elem.links.instagram} target="_blank" rel="noreferrer">
                             <IconBtn icon={Instagram} fontSize={28} m={1}/>
                           </a>
                        )}
                    </Box>
                </TabPanel>
            ))}
        </div>
    );
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} minHeight={isMobile ? 0 : "350px"}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.main,
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: (props) => (props.isMobile ? "column" : "row"),
    },
    tabs: {
        borderRight: (props) => (props.isMobile ? "none" : `1px solid ${theme.palette.secondary.main}`),
        borderBottom: (props) => (!props.isMobile ? "none" : `1px solid ${theme.palette.secondary.main}`),
        width: (props) => (props.isMobile ? "inherit" : "200px"),
        maxWidth: (props) => (props.isMobile ? "inherit" : "200px"),
        minWidth: (props) => (props.isMobile ? "inherit" : "200px"),
    },
    indicator: {
        backgroundColor: "red",
    },
}));

export default StyledTabs;
