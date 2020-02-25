import React from 'react';
import styled from "styled-components";
import Dropdown from "../../src/Dropdown";

export default function Dropdowns(){
    return <Container>
        <h1>Випадаючі меню</h1>

        <Dropdown title={'Випадаюче меню'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aperiam assumenda commodi consequatur distinctio dolorem esse et facilis fuga fugit impedit ipsa itaque iure, laborum laudantium magnam minima minus nemo nisi optio, perferendis praesentium provident quaerat, quasi recusandae reprehenderit sed sit soluta tempora tempore tenetur voluptas voluptates! Architecto cum cupiditate deleniti dolor dolore molestias perspiciatis ut voluptates voluptatum. Deleniti dolorem enim harum id nobis saepe sapiente sunt veniam vitae voluptate. Distinctio fuga iure laborum maxime molestias quae voluptate! Autem consectetur consequuntur, doloribus esse illum iste maxime nobis obcaecati odit quasi quidem quod, repudiandae sequi sint totam vel, vero voluptas!
        </Dropdown>

        <Dropdown title={'Випадаюче меню з іконкою'} icon={'file-alt'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aperiam assumenda commodi consequatur distinctio dolorem esse et facilis fuga fugit impedit ipsa itaque iure, laborum laudantium magnam minima minus nemo nisi optio, perferendis praesentium provident quaerat, quasi recusandae reprehenderit sed sit soluta tempora tempore tenetur voluptas voluptates! Architecto cum cupiditate deleniti dolor dolore molestias perspiciatis ut voluptates voluptatum. Deleniti dolorem enim harum id nobis saepe sapiente sunt veniam vitae voluptate. Distinctio fuga iure laborum maxime molestias quae voluptate! Autem consectetur consequuntur, doloribus esse illum iste maxime nobis obcaecati odit quasi quidem quod, repudiandae sequi sint totam vel, vero voluptas!

            <Dropdown title={'Вкладене випадаюче меню з іконкою'} icon={'file-alt'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aperiam assumenda commodi consequatur distinctio dolorem esse et facilis fuga fugit impedit ipsa itaque iure, laborum laudantium magnam minima minus nemo nisi optio, perferendis praesentium provident quaerat, quasi recusandae reprehenderit sed sit soluta tempora tempore tenetur voluptas voluptates! Architecto cum cupiditate deleniti dolor dolore molestias perspiciatis ut voluptates voluptatum. Deleniti dolorem enim harum id nobis saepe sapiente sunt veniam vitae voluptate. Distinctio fuga iure laborum maxime molestias quae voluptate! Autem consectetur consequuntur, doloribus esse illum iste maxime nobis obcaecati odit quasi quidem quod, repudiandae sequi sint totam vel, vero voluptas!
            </Dropdown>
        </Dropdown>

        <Dropdown title={'Деактивоване випадаюче меню з іконкою'} icon={'file-alt'} disabled>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aperiam assumenda commodi consequatur distinctio dolorem esse et facilis fuga fugit impedit ipsa itaque iure, laborum laudantium magnam minima minus nemo nisi optio, perferendis praesentium provident quaerat, quasi recusandae reprehenderit sed sit soluta tempora tempore tenetur voluptas voluptates! Architecto cum cupiditate deleniti dolor dolore molestias perspiciatis ut voluptates voluptatum. Deleniti dolorem enim harum id nobis saepe sapiente sunt veniam vitae voluptate. Distinctio fuga iure laborum maxime molestias quae voluptate! Autem consectetur consequuntur, doloribus esse illum iste maxime nobis obcaecati odit quasi quidem quod, repudiandae sequi sint totam vel, vero voluptas!
        </Dropdown>

    </Container>
}

const Container = styled.div`
    display: block;
`;
