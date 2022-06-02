import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./global.module.scss";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  TextareaAutosize,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import styled from "@emotion/styled";

import { makeStyles } from "@mui/styles";

import { Area, City, Controlled } from "../initValue";
import { ButtonUnstyled } from "@mui/base";

export default function HandleForm() {
  const [AreaInfo, setAreaInfo] = useState("");
  const [cityInfo, setCityInfo] = useState("");
  const [controlledByInfo, setControlledByInfo] = useState("");
  const [valueTextArea, setValueTextArea] = useState("");

  const handleChangeAreaInfo = (event) => {
    setAreaInfo(event.target.value);
  };
  const handleChangeCityInfo = (event) => {
    setCityInfo(event.target.value);
  };
  const handleChangeControlledByInfo = (event) => {
    setControlledByInfo(event.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ select: {} });
  const Styles = styled(TextField)(({ theme }) => ({
    "&.MuiTextField-root": {
      width: "100%",
      height: "56px",
      fontSite: "16px",
      margin: "0px",
      "& input": {},
      "& fieldset": { borderColor: "blue", borderRadius: "10px" },
      "& > .MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.css-md26zr-MuiInputBase-root-MuiOutlinedInput-root":
        {
          // borderRadius: "10px",
        },
    },
  }));
  const CustomButton = styled(ButtonUnstyled)`
    padding: 15px 0;
    border-radius: 10px;
  `;

  const useStyles = makeStyles((theme) => ({
    styleChange: {
      width: "100%",

      borderRadius: "10px",

      "&.MuiTextField-root": {
        margin: "0px",
      },
      "& > .MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-root-MuiOutlinedInput-root":
        {
          height: "38px",
          borderRadius: "0px",
        },
      "& .MuiSvgIcon-root": {
        borderLeft: "1px solid hsl(0, 0%, 80%)",
        position: "unset",
        fontSize: "37px",
      },
      "& fieldset": { borderColor: "blue" },
    },
  }));
  const classes = useStyles();
  const onSubmit = (data) => {
    console.log(data);
  };
  const handleClearInfo = () => {
    setAreaInfo("");
    setCityInfo("");
    setControlledByInfo("");
    setValueTextArea("");
  };

  return (
    <div className="wrapper w-full h-auto">
      <div className="container w-full h-auto">
        <div className="content w-600 h-auto m-auto border border-inherit">
          <div className="content-form w-96% h-auto m-auto">
            <div className="content-form-title w-full h-auto">
              <h2 className="text-center text-2xl font-semibold p-4">
                Chinh sua phong ban
              </h2>
            </div>
            <div className="content-form-main w-full h-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`${styles.contentFormField}`}>
                  <div className={`${styles.formTitle}`}>
                    <label>Ten phong ban</label>
                  </div>
                  <div className="form-subtitle w-3/5 h-auto">
                    <Styles
                      error={errors.roomName?.type === "required"}
                      {...register("roomName", { required: true })}
                      fullWidth
                      placeholder="nhap ten phong ban"
                      helperText={
                        errors?.roomName ? "Ban chua nhap ten phong ban" : ""
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <ClearIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div className={`${styles.contentFormField}`}>
                  <div className={`${styles.formTitle}`}>
                    <label>Khu vuc mien</label>
                  </div>
                  <FormControl
                    className="form-subtitle w-3/5 h-auto"
                    error={errors.areaInfo?.type === "required"}
                  >
                    <Select
                      style={{ borderRadius: "10px" }}
                      id="outlined-select-areaInfo"
                      displayEmpty
                      {...register("areaInfo", { required: true })}
                      value={AreaInfo}
                      defaultValue=""
                      onChange={handleChangeAreaInfo}
                      className={classes.styleChange}
                    >
                      <MenuItem disabled value="">
                        <em className={`${styles.placeholderSelect}`}>
                          Chon khu vuc mien
                        </em>
                      </MenuItem>
                      {Area.map((option) => (
                        <MenuItem key={option.value} value={option}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText className="text-red">
                      {errors?.areaInfo ? "Ban chua chon khu vuc" : ""}
                    </FormHelperText>
                  </FormControl>
                </div>
                <div className={`${styles.contentFormField}`}>
                  <div className={`${styles.formTitle}`}>
                    <label>Tinh thanh pho</label>
                  </div>
                  <FormControl
                    className="form-subtitle w-3/5 h-auto"
                    error={errors.cityInfo?.type === "required"}
                  >
                    <Select
                      style={{ borderRadius: "10px" }}
                      id="outlined-select-cityInfo"
                      displayEmpty
                      {...register("cityInfo", { required: true })}
                      value={cityInfo}
                      defaultValue=""
                      onChange={handleChangeCityInfo}
                      className={classes.styleChange}
                      placeholder="Chon khu vuc mien"
                    >
                      <MenuItem disabled value="">
                        <em className={`${styles.placeholderSelect}`}>
                          Chon tinh thanh pho
                        </em>
                      </MenuItem>
                      {City.map((option) => (
                        <MenuItem key={option.value} value={option}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText className="text-red">
                      {errors?.areaInfo ? "Ban chua chon tinh thanh pho" : ""}
                    </FormHelperText>
                  </FormControl>
                </div>
                <div className={`${styles.contentFormField}`}>
                  <div className={`${styles.formTitle}`}>
                    <label>Duoc quan ly boi</label>
                  </div>
                  <FormControl
                    className="form-subtitle w-3/5 h-auto"
                    error={errors.controlledByInfo?.type === "required"}
                  >
                    <Select
                      style={{ borderRadius: "10px" }}
                      id="outlined-select-controlledInfo"
                      displayEmpty
                      {...register("controlledByInfo", { required: true })}
                      value={controlledByInfo}
                      defaultValue=""
                      onChange={handleChangeControlledByInfo}
                      className={classes.styleChange}
                    >
                      <MenuItem disabled value="">
                        <em className={`${styles.placeholderSelect}`}>
                          Chon bo phan quan ly
                        </em>
                      </MenuItem>
                      {Controlled.map((option) => (
                        <MenuItem key={option.value} value={option}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText className="text-red">
                      {errors?.controlledByInfo
                        ? "Ban chua chon bo phan quan ly"
                        : ""}
                    </FormHelperText>
                  </FormControl>
                </div>
                <div
                  className={`${styles.contentFormField} border-inherit border-b pb-8`}
                >
                  <div className={`${styles.formTitle}`}>
                    <label>Ghi chu</label>
                  </div>
                  <div className="form-subtitle w-3/5 h-auto">
                    <TextareaAutosize
                      {...register("note")}
                      minRows={5}
                      style={{
                        width: "100%",
                        border: "1px solid hsl(0, 0%, 80%)",
                        borderRadius: "10px",
                        borderColor: "blue",
                      }}
                    />
                  </div>
                </div>
                <div className="w-full h-auto flex justify-end pb-7">
                  <div className="w-1/4 h-auto bg-slate-200 m-2 rounded-10">
                    <CustomButton
                      className="w-full h-auto py-4"
                      onClick={handleClearInfo}
                    >
                      Huy
                    </CustomButton>
                  </div>
                  <div className="w-1/4 h-auto bg-sky-600 m-2 rounded-10">
                    <CustomButton
                      type="submit"
                      className="w-full h-auto text-white"
                    >
                      Luu
                    </CustomButton>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
