<template>
    <div>
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
            tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel">Модалка 1</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Покажите второе модальное окно и скройте его с помощью кнопки ниже.
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"
                            data-bs-dismiss="modal">Открыть второе модальное окно</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel2">Модалка 2</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Скройте это модальное окно и покажите первое с помощью кнопки ниже.
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                            data-bs-dismiss="modal">Вернуться к первому</button>
                    </div>
                </div>
            </div>
        </div>
        <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Открыть первое модальное
            окно</a>
    </div>
</template>

<script>
export default {
    name: 'VModalStore',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
.modal {
    left: 0;
    right: 0;
    top: 50px;
    width: 400px;
}
</style>