# bind(el-đối tượng, binding-thằng muốn bind vào đâu, vnode- điểm mà ta muốn bind vào): gọi khi directive được gắn vào element

# inserted(el, binding, vnode): được gọi khi component hoặc element có directive được insert vào node chá của chúng. Nhưng vẫn chưa được đưa vào trong DOM.

# updated(el, binding, vnode, oldVnode): được gọi khi các thành phần của component/element có directive đã được cập nhật , nhưng nhiều khả năng là là sẽ xảy ra trước khi các component/element con của chúng

# componentUpdate(el, binding, vnode, oldVnode): được gọi khi các thành phần của component/element có directive và con cưa chúng đã được câp nhật

# unbind(el, binding, vnode): được gọi khi directive được huỷ bỏ