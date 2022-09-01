import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CategoryNav from "../../components/CategoryNav";
import Siderbar from "../../components/Siderbar";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import axios from "axios";

const toolbarOptions = [
  ["link", "image", "video"],
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
];

// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "link",
  "image",
  "video",
  "width",
];

const modules = {
  toolbar: {
    container: toolbarOptions,
  },
};
const Wrap = styled.div`
  min-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  width: 100%;
  height: 155px;
`;
const Banner = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 155px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #282e40),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  position: relative;
  display: flex;
  align-items: center;
`;
const GameTitle = styled.div`
  height: 90px;
  span:first-child {
    display: block;
    font-size: 38px;
    font-weight: 600;
  }

  span:nth-child(2) {
    font-size: 16px;
    font-weight: 600;
  }
  span:last-child {
    font-size: 14px;
    font-weight: 400;
  }
`;
const ContentsWrap = styled.div`
  width: 1000px;
  position: relative;
  bottom: 110px;
`;
const ContentWrap = styled.div`
  display: flex;
  height: fit-content;
`;
const Contents = styled.div`
  width: 690px;
  height: 700px;
  background-color: #282e40;
  padding: 20px;
`;
const BoardTitle = styled.span`
  display: block;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const SelectWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Select = styled.select`
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  border: 1px solid black;
  background-color: #373e59;
  color: whitesmoke;
  padding: 5px;
  font-weight: 400;
  margin-bottom: 5px;
`;
const TitleWrap = styled.div``;

const Form = styled.form`
  button {
    :first-child {
      margin-right: 5px;
    }
    font-size: 13px;
    width: 120px;
    height: 40px;
    background-color: #373e59;
    border: none;
    border: 1px solid black;
    color: whitesmoke;
    cursor: pointer;
    :hover {
      color: #2196f3;
    }
  }
`;
const TitleInput = styled.input`
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 5px;
  background-color: #373e59;
  color: whitesmoke;
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid black;
`;

const ButtonWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 20px;
`;

interface IBoardWrite {
  title: string;
  contents: any;
  select: string;
  image: string;
}
function BoardUpdate() {
  const [data, setData] = useState<any>({});
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    withCredentials: true,
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IBoardWrite>();
  const dispatch = useDispatch();
  const onSubmit = ({ select, title, contents }: any) => {
    console.log(type, select, title, contents);
    Update(type, select, title, contents);
  };
  const { pathname } = useLocation();
  const Type = ["자유", "유머", "유저뉴스", "영상", "팬아트"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navigate = useNavigate();
  const { game, type, id } = useParams();
  const handleChange = (value: any) => {
    setValue("contents", value);
  };
  useEffect(() => {
    axios
      .get(`api/board/${id}`, config)
      .then((reponse) => {
        setValue("title", reponse.data.title);
        setValue("contents", reponse.data.contents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const Update = (type: any, select: string, title: string, contents: any) => {
    axios
      .put(
        `/api/board/${id}`,
        JSON.stringify({
          title: title,
          contents: contents,
          category: type,
        }),
        config
      )
      .then((reponse) => {
        console.log(reponse);
        navigate(`/gamepage/${game}/게시판/boardview/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Wrap>
      <CategoryNav />
      <Header>
        <Banner
          bgphoto={
            "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt728b7e80503d4a3b/60b813c6a8cd6a0a26e29220/Patch_11_12_Notes_Banner.jpg"
          }
        ></Banner>
      </Header>
      <ContentsWrap>
        <GameTitle>
          <span>{type}</span>
          <span>{game} </span>
          <span>{type}입니다. 커뮤니티 매너를 준수합시다!</span>
        </GameTitle>
        <ContentWrap>
          <Siderbar />
          <Contents>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <BoardTitle>게시글 수정</BoardTitle>
              <SelectWrap>
                <Select {...register("select")}>
                  {Type.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </Select>
              </SelectWrap>
              <TitleWrap>
                <TitleInput
                  {...register("title")}
                  placeholder="제목"
                  type="text"
                />
                <ReactQuill
                  style={{ height: "430px" }}
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  onChange={handleChange}
                  value={watch("contents")}
                />
                <ButtonWrap>
                  <button
                    type="button"
                    onClick={() => navigate(`/gamepage/${game}/게시판`)}
                  >
                    수정취소
                  </button>
                  <button type="submit">수정완료</button>
                </ButtonWrap>
              </TitleWrap>
            </Form>
          </Contents>
        </ContentWrap>
      </ContentsWrap>
    </Wrap>
  );
}

export default BoardUpdate;
