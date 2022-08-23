import { useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CategoryNav from "../../components/CategoryNav";
import Siderbar from "../../components/Siderbar";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import axios from "axios";

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
function BoardWrite() {
  const toolbarOptions = [
    ["link", "image", "video"],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];

  const imageHandler = () => {
    console.log("에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!");

    // 1. 이미지를 저장할 input type=file DOM을 만든다.
    const input: any = document.createElement("input");
    // 속성 써주기
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
    // input이 클릭되면 파일 선택창이 나타난다.

    // input에 변화가 생긴다면 = 이미지를 선택
    input.addEventListener("change", async () => {
      console.log("사진 첨부");
      const file = input.files[0];
      // multer에 맞는 형식으로 데이터 만들어준다.
      const formData = new FormData();

      formData.append("img", file); // formData는 키-밸류 구조
      // 백엔드 multer라우터에 이미지를 보낸다.
      console.log(file);
      try {
        // const result = await axios.post("http://localhost:4050/img", formData);
        const result = await axios.post(`/api/`, formData, config);
        console.log("성공 시, 백엔드가 보내주는 데이터", result.data.url);
        const IMG_URL = result.data.url;
        // 이 URL을 img 태그의 src에 넣은 요소를 현재 에디터의 커서에 넣어주면 에디터 내에서 이미지가 나타난다
        // src가 base64가 아닌 짧은 URL이기 때문에 데이터베이스에 에디터의 전체 글 내용을 저장할 수있게된다
        // 이미지는 꼭 로컬 백엔드 uploads 폴더가 아닌 다른 곳에 저장해 URL로 사용하면된다.

        // 이미지 태그를 에디터에 써주기 - 여러 방법이 있다.
        const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
        // 1. 에디터 root의 innerHTML을 수정해주기
        // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
        // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
        // editor.root.innerHTML =
        //   editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.

        // 2. 현재 에디터 커서 위치값을 가져온다
        const range = editor.getSelection();
        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range.index, "image", IMG_URL);
      } catch (error) {
        console.log("실패했어요ㅠ");
      }
    });
  };
  // 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: toolbarOptions,
        handlers: {
          // 이미지 처리는 우리가 직접 imageHandler라는 함수로 처리할 것이다.
          image: imageHandler,
        },
      },
    };
  }, []);
  const formats = [
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
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    withCredentials: true,
  };
  const quillRef = useRef<any>();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IBoardWrite>();
  const dispatch = useDispatch();
  const data = localStorage.getItem("accessToken");
  const onSubmit = ({ select, title, contents }: any) => {
    console.log(type, select, title, contents);
    Write(type, select, title, contents);
  };
  const { pathname } = useLocation();
  const Type = ["자유", "유머", "유저뉴스", "영상", "팬아트"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navigate = useNavigate();
  const { game, type } = useParams();
  const handleChange = (value: any) => {
    setValue("contents", value);
  };

  const Write = (type: any, select: string, title: string, contents: any) => {
    axios
      .post(
        `/api/board`,
        JSON.stringify({
          title: title,
          contents: contents,
          category: type,
          type: select,
        }),
        config
      )
      .then((reponse) => {
        console.log(reponse);
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
              <BoardTitle>글쓰기</BoardTitle>
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
                  ref={quillRef}
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
                    취소
                  </button>
                  <button type="submit">작성</button>
                </ButtonWrap>
              </TitleWrap>
            </Form>
          </Contents>
        </ContentWrap>
      </ContentsWrap>
    </Wrap>
  );
}

export default BoardWrite;
