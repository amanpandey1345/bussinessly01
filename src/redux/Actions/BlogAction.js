import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogApi = createAsyncThunk(
  "blog/getBlogApi",
  async (hs, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://expertdevelopersblog.vercel.app/api/blog`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const CreateBlogApi = createAsyncThunk(
  "blog/CreateBlogApi",
  async ({ title, imgUrl, content, tag, cat, slug }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `https://expertdevelopersblog.vercel.app/api/blog`,
        {
          title,
          imgUrl,
          content,
          tag,
          cat,
          slug,
        }
      );
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
