# css
# [第一章&nbsp;css使操作更加精准](#第一章&nbsp;css使操作更加精准)

第一章&nbsp;css使操作更加精准
---------
#本章提要:  

##### css选择器:
* 类选择器 `.className`
* 子选择器 `A > B`
* 伪类`:hover`  

#正文
当我们要编辑一个列表的时候，下面这种体验其实是很糟糕的。

![alt 糟糕的体验](https://cbtpro.github.io/css/example/Chapter%201/images/20170518152506.jpg)
当用户勾选了多条记录的时候是没法编辑的

##你的工作不只是完成代码，好的用户体验也是你的职责
我们换种方式来做编辑这个操作，当鼠标悬浮到要编辑的记录上时，显示编辑按钮。[点击这里查看demo](https://cbtpro.github.io/css/example/Chapter%201/Chapter%201.html)
![alt 舒服的体验](https://cbtpro.github.io/css/example/Chapter%201/images/20170518161228.jpg)
![alt 舒服的体验](https://cbtpro.github.io/css/example/Chapter%201/images/20170518161259.jpg)
相比用复选框还勾选的操作，这种操作更加精准，代码难度更低。
##### 实现逻辑：
* 编辑按钮的透明度设置为0
* table的tr添加hover，在触发hover后，将编辑按钮设置为可见。 
```html
<table class="table">
	<thead>
		<tr><th>No.</th>
		<th>Name</th>
		<th>Sex</th>
		<th>&nbsp;</th>
	</tr></thead>
	<tbody>
		<tr class="operate-hidden-element-parent">
			<td>1</td>
			<td>bob</td>
			<td>1</td>
			<td>
				<button class="btn btn-default operate-hidden-element">编辑</button>
			</td>
		</tr>
		<tr class="operate-hidden-element-parent">
			<td>2</td>
			<td>peter</td>
			<td>1</td>
			<td>
				<button class="btn btn-default operate-hidden-element">编辑</button>
			</td>
		</tr>
		<tr class="operate-hidden-element-parent">
			<td>3</td>
			<td>selina</td>
			<td>0</td>
			<td>
				<button class="btn btn-default operate-hidden-element">编辑</button>
			</td>
		</tr>
	</tbody>
</table>
```
注意看这里在tr有个.operate-hidden-element-parent的样式，由它来触发hover。编辑按钮上有个.operate-hidden-element样式，是为了让按钮先隐藏罢了。  
这里要用到一个很重要的选择器`子选择器` `A > B`,选择器要灵活使用，回到刚才的html代码，html是树状结构的，可以看到事件触发的地方tr下层是td，td下层才是button。那么选择器应该是`tr > td > button`,必须要用两个子选择器才可以准确找到button，否则选择器是无效的。
稍微修改下，就成了下面这个样子，当然你还可以继续修改。
```css
.operate-hidden-element-parent:hover > td > button.operate-hidden-element {
	opacity: 1;
}
.operate-hidden-element {
	opacity: 0;
}
```
这样，当鼠标悬停到某一行记录上，右侧的编辑按钮就会变成可见，非常精准的就能编辑这条记录了。

##### 拓展
 * 相邻兄弟选择器 `A + B`
 * 普通兄弟选择器 `A ~ B`
 * 后代选择器 `A B`
#参考文档：
* [css选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#选择器)
# [第一章 css使操作更加精准](#第一章 css使操作更加精准)