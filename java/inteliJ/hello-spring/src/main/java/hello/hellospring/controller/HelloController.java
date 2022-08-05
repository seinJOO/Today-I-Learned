package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @GetMapping("/hello")
    public String hello(Model model) {
        model.addAttribute("data","hello!!");
        return "hello";
    }

    @GetMapping("hello-mvc")
    public String helloMvc(@RequestParam(value="name") String name, Model model) {
        // http://localhost:8080/hello-mvc?name=senny (getMapping이니까 url에 파라미터를 넣어주기~)
        model.addAttribute("name", name);
        return "hello-template";
    }

    @GetMapping("hello-string")
    @ResponseBody // API형식 - return값을 HTTP에 그대로 전달 (VIEW로 이동 X)
    public String helloString(@RequestParam("name") String name) {
        return "hello " + name;
    }

    @GetMapping("hello-api")
    @ResponseBody
    public Hello HelloApi (@RequestParam("name") String name){
        Hello hello = new Hello();
        hello.setName(name);
        return hello;
        // 아래에 임시로 만든 Hello 클래스 리턴 - JSON 방식으로 데이터를 내려줌 ({name:senny})
        // ResponseBody의 경우 String을 리턴하면 문자열을 그대로 HTTP에 내려주는데 (StringConverter),
        // 객체인 경우에는 디폴트가 JSON방식으로 데이터를 만들어서 HTTP 응답에 반환 (JsonConverter)
        // ** 클라이언트의 HTTP Accept 헤더가 특정 형태의 데이터를 요청했다면 HttpMessageConverter가 동작함
    };

    static class Hello{ // 임시로 데이터 클래스 만들기
        private String name;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
